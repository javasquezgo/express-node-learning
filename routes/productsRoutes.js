const express = require("express");
const router = express.Router();

const ProductsService = require("./../service/productsService");
const service = new ProductsService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get("/filter", async (req, res) => {
  res.send("I am a filter");
});

router.get("/:productId", async (req, res) => {
  const { productId } = await req.params;
  const products = service.findOne(productId);
  res.json(products);
});

router.post("/", async (req, res) => {
  const body = req.body;

  const newProduct = await service.create(body);

  res.json(newProduct);
});

router.patch("/:productId", async (req, res) => {
  const { productId } = req.params;
  const body = req.body;
  const product = await service.update(productId, body);

  res.json({
    message: "Update",
    data: product,
    id,
  });
});

router.delete("/:productId", async (req, res) => {
  const { productId } = req.params;
  const product = await service.delete(productId);

  res.json({
    message: "delete",
  });
});

module.exports = router;
