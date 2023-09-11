import asyncHandler from 'express-async-handler';
import Cart from '../models/cartModel.js';
import User from '../models/userModel.js';

// @desc    cart adding item
// @route   post /api/items
// @access  Private
const postCartItem = asyncHandler(async (req, res) => {
    

   
    const user = await Cart.create({
       ...req.body.item,
        users:req.user._id
    });
  
    if (user) {
      console.log(user)
      res.status(201).json({
       message:"Item added successfully",
       data:user
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
    
});


// @desc    cart getting from single user item
// @route   get /api/items
// @access  Private
const getCartItem = asyncHandler(async (req, res) => {
    const CartItems = await Cart.find({users:req.user._id.toString()});


  
    if (CartItems) {
      res.status(200).json({
         items:CartItems
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
    
});


// @desc    cart deleting by id
// @route   delete /api/items/:id
// @access  Private

const deleteCartItem = asyncHandler(async (req, res) => {
    const CartItems = await Cart.findByIdAndDelete(req.params.id);
  
    if (CartItems) {
      res.status(200).json({
         message:"Item deleted Successfully",
         id:req.params.id
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
    
});

export {
 postCartItem,
 getCartItem,
 deleteCartItem
};
