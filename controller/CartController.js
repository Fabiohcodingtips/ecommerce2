// controllers/productController.js

const Cart = require('../model/Cart');

// Function to add a product
const addtoCart = async(req,res)=>{
    try{
        const {name,price,image} = req.body;

        // const existingProduct = await Product.findOne({name});
        const cartProduct = await Product.create({
            name,
            price,
            image

        });

        // if(existingProduct){
        //     console.log('Product already exists');
        //     res.status(400).json({error:"Product already exists"});

        // }else{
         
        //     res.status(201).json(newProduct);
        //     console.log("Product already created",newProduct);
        // }
    }catch(error){
        console.log('Error in creating new product');
        res.status(500).json({error:error.message});

    }
}
const getCart = async (req, res) => {
    try {
        const product = await Cart.find();
        console.log('Products fetched successfully');
        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Error fetching products' });
    }
}

module.exports = {
    addToCart,
    getCart
};