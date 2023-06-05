import asyncHandler from "express-async-handler";
import Products from "../models/projectModel.js";

//@desc add a product
//route POST /api/products
//@access Private
const addProduct = asyncHandler(async (req, res) => {
  const { product_name, description, image_path } = req.body;

  const product = Products.create({
    product_name,
    description,
    image_path,
  });
  if (product) {
    res.status(201).json({
      id: _id,
      product_name: product_name,
      description: description,
      imagePath: image_path,
      message:"Product saved successfully"
    });
  }else{
    res.status(400);
    throw new Error("Product could not be saved")
  }
});

//@desc get all products
//route PUT /api/products/product
//@access Private


//@desc update a product product/
//route PUT /api/products
//@access Private
