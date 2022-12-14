const express = require('express');
const passport = require('passport');
const { addProduct, getProduct, getProductbyid, updateProduct, deleteProduct } = require('../Controllers/Product_Controller');
const router = express.Router();
router.post('/addproduct', passport.authenticate('bearer', { session: false }), addProduct);
router.get('/getproduct', passport.authenticate('bearer', { session: false }), getProduct);
router.get('/getproductbyid/:idProduct', passport.authenticate('bearer', { session: false }), getProductbyid);
router.put('/updateproduct/:idProduct', passport.authenticate('bearer', { session: false }), updateProduct);
router.delete('/deleteproduct/:idProduct', passport.authenticate('bearer', { session: false }), deleteProduct);
module.exports = router;