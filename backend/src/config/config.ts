import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
}