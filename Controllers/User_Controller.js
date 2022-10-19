const User = require('../Models/User_Model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.User = async (req, res) => {
  try {
    const find = await User.findOne({ email: req.body.email });
    if (find) {
      res.status(400).send({ message: `email already exists, please enter another email` });
    }
    else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      req.body.password = hash
      await User.create(req.body)
      res.send({ message: `User is created` });
    }
  } catch (error) {
    res.status(500).send({ message: `Server Error` })
  }
};
exports.login = async (req, res) => {
  try {
    const find = await User.findOne({ email: req.body.email })
    console.log(find)
    if (find) {
      const passwordValidation = await bcrypt.compare(req.body.password, find.password)
      if (passwordValidation) {
        userData = {
          email: find.email,
          idUser: find._id
        }
        const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '6h' })
        res.send({ token })
      } else {
        res.status(400).send({ message: `please check your email or password` })
      }
    }
    else {
      res.status(400).send({ message: `please check youremail or password` })
    }
  }
  catch (error) {
    res.status(500).send({ message: `Server error` })
  }
};
exports.getProductbyid = async (req, res) => {
  try {
    const users = await Product.findById(req.body.idProduct)
    res.send(users)
  } catch (error) {
    res.status(500).send({ message: `Server error` })
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const Users = await User.findByIdAndDelete(req.body.idUser)
    res.send(Users)
  } catch (error) {
    res.status(500).send({ message: `Server error` })
  }
};
exports.updateUser = async (req, res) => {
  try {
    const Users = await User.findByIdAndUpdate(req.body.idUser, req.body)
    res.send(Users)
  } catch (error) {
    res.status(500).send({ message: `Server error` })
  }
};