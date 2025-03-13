import dbPromise from "./connection.mjs";
import faker from "faker";

async function seedDatabase() {
  const db = await dbPromise;
  console.log("Seeding database...");

  let emailSet = new Set();

  // Insert Users
  for (let i = 0; i < 10000; i++) {
    let email;
    do {
      email = faker.internet.email();
    } while (emailSet.has(email));
    emailSet.add(email);

    await db.run(
      `INSERT INTO users (name, email, phone_number, password_hash, role) 
                      VALUES (?, ?, ?, ?, ?)`,
      [
        faker.name.findName(),
        email,
        faker.phone.phoneNumber(),
        "hashedpassword",
        faker.helpers.randomize(["user", "store_owner"]),
      ]
    );
  }

  // Insert Establishments
  for (let i = 0; i < 1000; i++) {
    await db.run(
      `INSERT INTO establishments (name, address, phone_number, food_category, status) 
                      VALUES (?, ?, ?, ?, ?)`,
      [
        faker.company.companyName(),
        faker.address.streetAddress(),
        faker.phone.phoneNumber(),
        faker.helpers.randomize([
          "Grocery",
          "Restaurant",
          "Bakery",
          "Cafe",
          "Deli",
        ]),
        faker.helpers.randomize(["active", "inactive"]),
      ]
    );
  }

  // Insert Bags
  for (let i = 0; i < 20000; i++) {
    await db.run(
      `INSERT INTO bags (establishment_id, type, size, price, status, available_quantity, contents) 
                      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        faker.datatype.number({ min: 1, max: 1000 }),
        faker.helpers.randomize(["surprise", "regular"]),
        faker.helpers.randomize(["small", "medium", "large"]),
        faker.commerce.price(2, 20, 2),
        faker.helpers.randomize(["available", "reserved"]),
        faker.datatype.number({ min: 1, max: 10 }),
        faker.lorem.words(faker.datatype.number({ min: 3, max: 10 })),
      ]
    );
  }

  // Insert Reservations
  for (let i = 0; i < 25000; i++) {
    await db.run(
      `INSERT INTO reservations (user_id, bags, total_price, status, pickup_time, pickup_code) 
                      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        faker.datatype.number({ min: 1, max: 10000 }),
        JSON.stringify([faker.datatype.number({ min: 1, max: 20000 })]),
        faker.commerce.price(2, 50, 2),
        faker.helpers.randomize(["confirmed", "canceled", "completed"]),
        faker.date.soon(30).toISOString(),
        faker.random.alphaNumeric(6).toUpperCase(),
      ]
    );
  }

  console.log("Database seeding complete!");
}

seedDatabase();
