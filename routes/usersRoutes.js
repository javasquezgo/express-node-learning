const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const users = [];

  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    users.push({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      userName: faker.internet.userName(),
    });
  }

  res.json(users);
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  res.json({
    userId,
    name: "Alejandro Vásquez",
    userName: "Alejo",
  });
});

module.exports = router;
