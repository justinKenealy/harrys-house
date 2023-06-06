const express = require("express");
const { addToWishlist } = require("../models/wishlist-product");
const router = express.Router();

router.post("/", async (req, res) => {
  const { user_id, product_id } = req.body;
  try {
    const data = await addToWishlist(user_id, product_id);
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router