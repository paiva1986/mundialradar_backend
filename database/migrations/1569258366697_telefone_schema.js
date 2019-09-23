'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TelefoneSchema extends Schema {
  up () {
    this.create('telefones', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('telefones')
  }
}

module.exports = TelefoneSchema
