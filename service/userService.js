const { faker } = require("@faker-js/faker");

class UserService {
  constructor() {
    this.user = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 10; i++) {
      this.user.push({
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        user: faker.internet.userName(),
      });
    }
  }

  create() {}

  find() {
    return this.user;
  }

  findOne(id) {
    return this.user.find((person) => person.user === id);
  }

  update() {}

  delete() {}
}

module.exports = UserService;
