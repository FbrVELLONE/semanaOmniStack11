
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        //Chave primaria autoincrementavel
        table.increments();

        //linhas da tabela
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //Parte do relacionamento desta tabela com a outra: criaçao de chave estrangeira e sua linkagem
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
