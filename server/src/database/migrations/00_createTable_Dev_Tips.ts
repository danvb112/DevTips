import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('dev_tips', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('avatar').notNullable()
        table.string('bio').notNullable()
        table.string('whatsapp').notNullable()

        table.integer('dev_id')
        .notNullable()
        .references('id')
        .inTable('devs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('dev_tips')
}