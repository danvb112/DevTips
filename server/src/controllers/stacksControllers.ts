import { Request, Response, json } from 'express';
import convertHourToMinutes from '../utils/converHourToMinutes'
import db from '../database/connections'

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class StacksController {

    async create(request: Request, response: Response){
        const { 
            name,
            avatar,
            bio,
            whatsapp,
            stack,
            cost,
            schedule
         } = request.body

        const trx = await db.transaction()

        try {
            
            const insertUsersIds = await trx('users').insert({
                name,
                avatar,
                bio,
                whatsapp,
            });

            const user_id = insertUsersIds[0];

            const insertStacksIds = await trx('stacks').insert({
                stack,
                cost,
                user_id
            });

            const stack_id = insertStacksIds[0]

            const stackSchedule = schedule.map((scheduleItem: ScheduleItem) => {
               return { 
                stack_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to)
            }})

            await trx('stack_schedule').insert(stackSchedule)

            await trx.commit()

            return response.status(201).send()


        } catch (error) {
            await trx.rollback()
            return response.status(400).json({
                error: "Unexpected error while creating new stack"
            })
        }
    }

    async index(request: Request, response: Response){
        const filters = request.query;

        const stack = filters.stack as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if(!filters.week_day || !filters.stack || !filters.time) {
            return response.status(400).json({
                error: "Missing filters to search Devs"
            });
        }

        const timeInMinutes = convertHourToMinutes(time);
        
        const stacks = await db('stacks')
            .whereExists(function(){
                this.select('stack_schedule.*')
                .from('stack_schedule')
                .whereRaw('`stack_schedule`.`stack_id` = `stacks`.`id`')
                .whereRaw('`stack_schedule`.`week_day` = ??', [Number(week_day)])
                .whereRaw('`stack_schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`stack_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('stacks.stack', '=', stack)
            .join('users', 'user_id', '=', 'users.id')
            .select(['stacks.*', 'users.*']);
        
        return response.json(stacks)
    }
}