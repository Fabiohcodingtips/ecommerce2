const express = require('express');
const { addtoCart, getCart } = require('../controller/CartController');


const router = express.Router();
router.use(express.json());

//allow url encoding
router.use(express.urlencoded({extended:false}))

//create user router
router.post('/addtocart',addtoCart);
router.get('/getcart',getCart);

// //get  user router
// router.get('/allusers',getAllUsers);

// //user account login
// router.post('/userlogin',userLogin);

module.exports = router;