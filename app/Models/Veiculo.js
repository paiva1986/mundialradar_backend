'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Veiculo extends Model {
  cliente () {
    return this.belongsToMany('App/Models/Cliente').pivotModel(
      'App/Models/Contrato'
    )
  }
}

module.exports = Veiculo
