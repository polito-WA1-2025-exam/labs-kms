import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
  filename: 'RescuingSurplusFood/server/database/surplusfood.db',
  driver: sqlite3.Database,
});

export default dbPromise;
