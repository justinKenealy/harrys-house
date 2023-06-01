const express = require("express");
const axios = require("axios");
const { getAllProducts } = require("../models/product");

const router = express.Router();

// get all products
router.get("/", async (req, res, next) => {
    try {
      const user = await getAllProducts();
      return res.status(200).json({ user });
    } catch (err) {
      next(err);
    }
  });

// add routes for an admin to create/update/remove products?

module.exports = router;
