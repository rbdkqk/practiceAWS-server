const dotenv = require("dotenv");
dotenv.config();
// app.js에 넣은건 무시당했고,
// 이 파일에 위 내용을 직접 넣으니 잘 적용되고 있다...active

module.exports = {
  development: {
    username: "admin",
    password: process.env.DATABASE_PASSWORD,
    database: "shortlyAWS",
    host: "shortlyaws-dbdb.cdnjilyhs3ms.us-east-2.rds.amazonaws.com",
    dialect: "mysql",
    logging: false,
  },
};
