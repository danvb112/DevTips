import { Request, Response } from 'express'
import db from '../database/connections'

export default class UsersController {

    async create(request: Request, response: Response) {

        const {
            name,
            email,
            password
        } = request.body

        const trx = await db.transaction()

        try {
            
            await trx('users').insert({
                name,
                email,
                password
            })

            trx.commit()

            return response.status(201).send()

        } catch (error) {
            await trx.rollback()

            return response.status(400).json({
                error: 'Unexpected erro while creating new user'
            })
        }
    }
}