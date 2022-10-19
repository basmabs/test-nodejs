const Commande = require('../Models/Commande_Model');
const User = require('../Models/User_Model');
const Product = require('../Models/Product_Model');
exports.getCommand = async (req, res) => {
  exports.getProductsList_client = async (req, res) => {
    try {
      const products = await Product.findById(req.params.products)
      const user = await User.findById(req.body.idUser)
      res.send({ message: `products ${products}and client ${user}` })
      commande = {
        products: products.products,
        user: products.idUser
      }
    } catch (error) {
      res.status(400).send(error)
    }
  };
  exports.pushProduct = async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.idProduct, { $push: { products: req.params.idProduct } }, { new: true })
      res.send({ message: `Product is pushed to user` })
    } catch (error) {
      res.status(500).send({ message: `server error` })
    }
  }
};