import mongoose from "mongoose";

const productsSchema=mongoose.Schema({
    product_name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    
    },
    image_path:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Products=mongoose.model('Products',productsSchema);

export default Products;