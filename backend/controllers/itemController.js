import asyncHandler from 'express-async-handler';
import Item from '../models/itemModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Item get item
// @route   get /api/items
// @access  Public
const getItem = asyncHandler(async (req, res) => {


  const item = await Item.find({});

  if (item) {
    res.json({
    
      item
    });
  } else {
    res.status(401);
    throw new Error('item now found');
  }
});

// // @desc    Register a new user
// // @route   POST /api/users
// // @access  Public
// const registerUser = asyncHandler(async (req, res) => {
//   const {email, password} = req.body;

//   const userExists = await User.findOne({ email });

//   if (userExists) {
//     res.status(400);
//     throw new Error('User already exists');
//   }

//   const user = await User.create({
//     email,
//     password,
//   });

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       email: user.email,
//     });
//   } else {
//     res.status(400);
//     throw new Error('Invalid user data');
//   }
// });

// // @desc    Logout user / clear cookie
// // @route   POST /api/users/logout
// // @access  Public
// const logoutUser = (req, res) => {
//   res.cookie('jwt', '', {
//     httpOnly: true,
//     expires: new Date(0),
//   });
//   res.status(200).json({ message: 'Logged out successfully' });
// };

// // @desc    Get user profile
// // @route   GET /api/users/profile
// // @access  Private
// const getUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);

//   if (user) {
//     res.json({
//       _id: user._id,
//       email: user.email,
//     });
//   } else {
//     res.status(404);
//     throw new Error('User not found');
//   }
// });

// // @desc    Update user profile
// // @route   PUT /api/users/profile
// // @access  Private
// // const updateUserProfile = asyncHandler(async (req, res) => {
// //   const user = await User.findById(req.user._id);

// //   if (user) {
// //     user.name = req.body.name || user.name;
// //     user.email = req.body.email || user.email;

// //     if (req.body.password) {
// //       user.password = req.body.password;
// //     }

// //     const updatedUser = await user.save();

// //     res.json({
// //       _id: updatedUser._id,
// //       name: updatedUser.name,
// //       email: updatedUser.email,
// //     });
// //   } else {
// //     res.status(404);
// //     throw new Error('User not found');
// //   }
// // });
export {
getItem
};
