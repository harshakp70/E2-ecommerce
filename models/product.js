const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    mrp:{
        type: Number,
        required : true
    },
    variants:[{
        color:{
            type:String,
            required: true
        },
        colorName:{
            type:String,
            required:true
        },
        size:{
            type:String,
            enum:['XS','S','M','L','XL','XXL'],
            required:true
        },
        images:[{
            url:{
                type: String,
                required:true
            }}],
            price:{
                type:Number,
                required:true
        
              
            }
        }],
            
        


    
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }

  });
  const Product = mongoose.model('product', productSchema);

  module.exports = Product
