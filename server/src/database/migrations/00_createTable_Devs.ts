import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('devs', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('avatar').notNullable()
        table.string('bio').notNullable()
        table.string('whatsapp').notNullable()

    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('devs')
}