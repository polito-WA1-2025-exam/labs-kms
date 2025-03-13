import dbPromise from './connection.mjs';

async function initializeDB() {
  const db = await dbPromise;

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      phone_number TEXT,
      password_hash TEXT NOT NULL,
      allergies TEXT,
      special_requests TEXT,
      is_verified BOOLEAN DEFAULT 0,
      status TEXT DEFAULT 'active',
      role TEXT DEFAULT 'user'
    );

    CREATE TABLE IF NOT EXISTS establishments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      address TEXT NOT NULL,
      phone_number TEXT NOT NULL,
      food_category TEXT,
      status TEXT DEFAULT 'active'
    );

    CREATE TABLE IF NOT EXISTS bags (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      establishment_id INTEGER,
      type TEXT CHECK(type IN ('surprise', 'regular')) NOT NULL,
      size TEXT CHECK(size IN ('small', 'medium', 'large')) NOT NULL,
      price REAL NOT NULL,
      pickup_time_range TEXT,
      status TEXT CHECK(status IN ('available', 'reserved')) NOT NULL,
      contents TEXT,
      available_quantity INTEGER DEFAULT 1,
      FOREIGN KEY(establishment_id) REFERENCES establishments(id)
    );

    CREATE TABLE IF NOT EXISTS carts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      total_price REAL DEFAULT 0.0,
      status TEXT CHECK(status IN ('active', 'confirmed', 'canceled')) DEFAULT 'active',
      user_notes TEXT,
      FOREIGN KEY(user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS reservations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      bags TEXT,
      total_price REAL DEFAULT 0.0,
      status TEXT CHECK(status IN ('confirmed', 'canceled', 'completed')) DEFAULT 'confirmed',
      pickup_time TEXT,
      shopping_cart_id INTEGER,
      pickup_code TEXT,
      allergen_notes TEXT,
      FOREIGN KEY(user_id) REFERENCES users(id),
      FOREIGN KEY(shopping_cart_id) REFERENCES carts(id)
    );
  `);

  console.log('Database initialized!');
}

initializeDB();
