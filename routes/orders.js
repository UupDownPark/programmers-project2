const express = require("express");
const {
  order,
  getOrder,
  getOrderDetail,
} = require("../controller/OrderController");
const router = express.Router();

router.use(express.json());

router.post("/", order);

router.get("/", getOrder);

router.get("/:id", getOrderDetail);

module.exports = router;
