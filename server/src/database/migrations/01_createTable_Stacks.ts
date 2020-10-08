import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('stacks', table => {
        table.increments('id').primary()
        table.string('stack').notNullable()
        table.decimal('cost').notNullable()

        table.integer('tip_id')
            .notNullable()
            .references('id')
            .inTable('dev_tips')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        
})}

export async function down(knex: Knex){
    return knex.schema.dropTable('stacks')
}