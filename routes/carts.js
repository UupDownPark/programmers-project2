const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCartItems,
  removeCartItem,
} = require("../controller/CartController");

router.use(express.json());

router.post("/", addToCart);

router.get("/", getCartItems);

router.delete("/:id", removeCartItem);

router.get("/", getCartItems);

// //장바구니에서 예상한 상품 조회
// router.get("/carts", (req, res) => {
//   res.json("장바구니 조회");
// });

module.exports = router;
