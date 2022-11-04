const express = require("express");
const router = express.Router();

const UserService = require("./../service/userService");
const service = new UserService();

router.get("/", (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  const users = service.findOne(userId);
  res.json(users);
});

module.exports = router;
