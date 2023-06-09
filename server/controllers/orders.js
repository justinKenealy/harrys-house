const express = require("express");
const { getOrdersByUserId } = require("../models/order");
const router = express.Router();

//get orders by user id
router.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  return getOrdersByUserId(id)
    .then((orders) => res.json(orders))
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;