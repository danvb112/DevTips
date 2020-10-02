import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('stacks', table => {
        table.increments('id').primary()
        table.string('stack').notNullable()
        table.decimal('cost').notNullable()

        table.integer('dev_id')
            .notNullable()
            .references('id')
            .inTable('devs')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        
})}

export async function down(knex: Knex){
    return knex.schema.dropTable('stacks')
}