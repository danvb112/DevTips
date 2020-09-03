import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('stack_schedule', table => {
        table.increments('id').primary()
        table.integer('week_day').notNullable()
        table.integer('from').notNullable()
        table.integer('to').notNullable()

        table.integer('stack_id')
            .notNullable()
            .references('id')
            .inTable('stacks')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('stack_schedule')
}