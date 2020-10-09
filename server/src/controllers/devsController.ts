import { Request, Response } from 'express'
import db from '../database/connections'

export default class DevsController {

    async create(request: Request, response: Response) {

        const {
            email,
            password

        } = request.body

        const trx = await db.transaction()

        try {
            
            await trx('devs').insert({
                email,
                password
            })

            trx.commit()
            return response.status(200).send()

        } catch (error) {
            await trx.rollback()

            return response.status(400).json({
                error: "Unexpected erro while creating new dev"
            })       
        }
    }


    async verify(request: Request, response: Response) {

        const params = request.query

        const email = params.email as string;
        const password = params.password as string

        if(!email || !password) {
            return response.status(400).json({
                error: "Missing datas to complete verify"
            })
        }

        try {

            const loginDatas = await db('devs').where('email', email)

            const emailBanco = loginDatas[0]['email']
            const passwordBanco = loginDatas[0]['password']

            if(email == emailBanco && password == passwordBanco){
                return response.status(200).send()
            }else {
                return response.status(400).send()
            }

        } catch (error) {
            return response.status(400).json({
                error: "Email incorreto"
            })
        }
        
    }

}