const express = require("express");
const {
  addToWishlist,
  getWishlistProducts,
  deleteWishlistProduct,
} = require("../models/wishlist-product");
const router = express.Router();

//add new wishlist product
router.post("/", async (req, res) => {
  const { user_id, product_id } = req.body;
  try {
    const data = await addToWishlist(user_id, product_id);
    return res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

//get wishlist products by user id
router.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  return getWishlistProducts(id)
    .then((products) => res.json(products))
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

//delete wishlist product by user id & product id
router.delete("/:user_id/:product_id", (req, res) => {
  const user_id = Number(req.params.user_id);
  const product_id = Number(req.params.product_id);

  return deleteWishlistProduct(user_id, product_id)
    .then((data) => {
      data
        ? res.status(200).json({ message: "wishlist product deleted" })
        : res.status(404).json({ message: "Wishlist product not found" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
