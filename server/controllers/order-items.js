const express = require("express");
const { getOrderItemsByOrderId } = require("../models/order-item");
const router = express.Router();

//get order items by order ids
// router.get("/:id", (req, res, next) => {
//   const id = Number(req.params.id);
//   return getOrderItemsByOrderId(id)
//     .then((products) => res.json(products))
//     .catch((err) => {
//       res.status(500).json({ message: err.message });
//     });
// });

router.post("/", (req, res, next) => {
    const orderIDArray = req.body.orderIDs;
    return getOrderItemsByOrderId(orderIDArray)
      .then((products) => res.json(products))
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  });
  

module.exports = router;