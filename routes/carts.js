const express = require("express");
const router = express.Router();

router.use(express.json());

router.post("/", (req, res) => {
  res.json("장바구니 담기");
});

router.get("/", (req, res) => {
  res.json("장바구니 조회");
});

router.get("/:id", (req, res) => {
  res.json("카테고리별 도서 목록 조회");
});
// //장바구니에서 예상한 상품 조회
// router.get("/carts", (req, res) => {
//   res.json("장바구니 조회");
// });

module.exports = router;