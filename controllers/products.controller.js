
const  { Products } = require('../database/models')
const sequelize = require('sequelize')
const controller = {

  index: function(req, res) {
    Products.findAll()
      .then((results) => {
        res.render('index', { products: results })
      })
  },
  detail: function(req, res) {
    Products.findByPk(req.params.id)
      .then((result) => {
        console.log(result)
        res.render('product-detail', { product: result })
      })
  },

  // /top?stock=capacidad deseada

  topStock: function(req, res) {
    const stock = req.query.stock
    Products.findAll({
      where: {
        stock: {
          [sequelize.Op.gte]: stock
        }
      },
      order: [
        ['stock', 'DESC']
      ]
    })
    .then((products) => {
      console.log('PROMISE')
      //return testPromises(5000, true)
      res.send({ products } )
    })
    .catch((err) => {
      res.render('error', { err } )
    })

    console.log('CONSoLE LOG')
  }
}

const testPromises = (timeout, error) => new Promise((resolve, reject) =>{
  if(error) throw new Error('Error de promesa')
  setTimeout(() => {
    console.log("SE EJECUTO EL TIMEOUT")
    
    resolve()
  }, timeout)
})

module.exports = controller;
