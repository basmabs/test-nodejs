const Product = require('../Models/Product_Model');
exports.addProduct = async (req, res) => {
  try {
    await Product.create(req.body)
    res.send({ message: `product is created` })
  } catch (error) {
    res.status(500).send({ message: `Server error` });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find()
    res.send(products)
  } catch (error) {
    res.status(400).send(error)
  }
};
exports.getProductbyid = async (req, res) => {
  try {
    const products = await Product.findById(req.params.idProduct)
    res.send(products)
  } catch (error) {
    res.status(500).send({ message: `Server error` })
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.idProduct, req.body)
    res.send(products)
  } catch (error) {
    res.status(500).send({ message: `Server error` })
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.idProduct)
    res.send(products)
  } catch (error) {
    res.status(500).send({ message: `Server error` })
  }
};