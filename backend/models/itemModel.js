import mongoose from 'mongoose';

const ItemSchema = mongoose.Schema(
  {
    title: {
      type: String,
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


const Item = mongoose.model('Item', ItemSchema);

export default Item;
