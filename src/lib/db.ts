import mysql from "serverless-mysql";
import process from "process";

export const pool = mysql({
  config: {
    host: process.env.NEXT_PUBLIC_NOT_SECRET_HOST,
    user: process.env.NEXT_PUBLIC_NOT_SECRET_USER,
    password: process.env.NEXT_PUBLIC_NOT_SECRET_PASSWORD,
    port: Number(process.env.NEXT_PUBLIC_NOT_SECRET_PORT),
    database: process.env.NEXT_PUBLIC_NOT_SECRET_DATABASE,
  },
});
