
module.exports = (sequelize, dataTypes) => {
  const Product = sequelize.define('Products', {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: dataTypes.STRING,
    price: dataTypes.FLOAT,
    description: dataTypes.TEXT,
    stock: dataTypes.INTEGER
  }, {
    tableName: 'Products',
    timestamps: true
  })

  return Product

}