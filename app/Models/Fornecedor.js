'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fornecedor extends Model {
  static get table () {
    return 'fornecedores'
  }

  // compras() {
  //   return this.hasMany('App/Models/Compra')
  // }
}

module.exports = Fornecedor
