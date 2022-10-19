const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = new Schema(
  {
    name: { type: String, required: [true, 'name field is required'] },
    description: { type: String, required: [true, 'description field is required'] },
    quantity: { type: Number,$inc:+1, required: [true, 'quantity field is required'] },
    price: { type: Number, required: [true, 'price field is required'] }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
const product = mongoose.model('product', Product, 'product');
module.exports = product;