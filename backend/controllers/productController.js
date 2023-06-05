import asyncHandler from "express-async-handler";
import Products from "../models/projectModel.js";

//@desc add a product
//route POST /api/products
//@access Private
const addProduct = asyncHandler(async (req, res) => {
  const { product_name, description, image_path } = req.body;

  const product =await Products.create({
    product_name,
    description,
    image_path,
  });
  if (product) {
    res.status(201).json({
      id: product._id,
      product_name: product_name,
      description: description,
      image_path: image_path,
      message: "Product saved successfully",
    });
  } else {
    res.status(400);
    throw new Error("Product could not be saved");
  }
});

//@desc get all products
//route GET /api/products/products
//@access Private
const fetchProducts = asyncHandler(async (req, res) => {
  const allProducts = await Products.find();
  if (allProducts) {
    res.status(200).json({
      allProducts,
    });
  } else {
    res.status(400);
    throw new Error("Could not fetch the products");
  }
});

//@desc get single product
//route GET /api/products/product
//@access Private
const fetchOneProduct = asyncHandler(async (req, res) => {
  const product = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    created_at: req.user.created_at,
  };
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(400);
    throw new Error("Could not fetch the product");
  }
});

//@desc update a product
//route PUT /api/products/product
//@access Private

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.body._id);
  if (product) {
    product.product_name = req.body.product_name || product.product_name;
    product.description = req.body.description || product.description;
    product.image_path = req.body.image_path || product.image_path;

    const updProduct = await product.save();
    res.status(200).json({
      id: updProduct._id,
      product_name: updProduct.product_name,
      description: updProduct.description,
    });
  } else {
    res.status(400);
    throw new Error("Error while updating");
  }
});

//@desc delete a product
//route DELETE /api/products/product
//@access Private

const deleteRecord = asyncHandler(async (req, res) => {
  const delRecord = await Products.deleteOne(req.delRecord._id);
  if (delRecord) {
    res
      .status(200)
      .json({ message: `Deleted ${delRecord.product_name} successfully!` });
  } else {
    res.status(400);
    throw new Error("Error while deleting record!");
  }
});

export {
  addProduct,
  fetchProducts,
  fetchOneProduct,
  updateProduct,
  deleteRecord,
};
