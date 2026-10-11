import { config } from "dotenv";
import { createPool } from "mysql2/promise";

// Load environment variables from .env file
config();

const { DB_HOST: host, DB_USER: user, DB_PASSWORD: password, DB_NAME: database } = process.env;

if (!host || !user || !password || !database) {
  throw new Error("Missing required database environment variables.");
}

const pool = createPool({
  host,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10
});

export default pool;