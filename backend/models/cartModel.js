import mongoose from 'mongoose';

const CartSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    img: {
      type: String,
      required: true,
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
  },
  {
    timestamps: true,
  }
);


const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
