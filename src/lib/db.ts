import mysql from "serverless-mysql";

export const pool = mysql({
  config: {
    host: "103.18.7.158",
    user: "qxqarhl4yzwm_hung",
    password: "Admin_12345#Admin_12345#",
    port: 3306,
    database: "qxqarhl4yzwm_anri",
  },
});
