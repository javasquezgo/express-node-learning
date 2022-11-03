const express = require("express");
const router = express.Router();

const ProductsService = require("./../service/productsService");
const service = new ProductsService();

router.get("/", (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get("/filter", (req, res) => {
  res.send("I am a filter");
});

router.get("/:productId", (req, res) => {
  const { productId } = req.params;
  const products = service.findOne(productId);
  res.json(products);
});

router.post("/", (req, res) => {
  const body = req.body;

  res.json({
    message: "created",
    data: body,
  });
});

module.exports = router;
