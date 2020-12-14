// exports configuring parameters for MySQL connection & Sequelize.

// Visit for more info on how to configure sequelize database: https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor

require("dotenv").config();
// file to config MySQL database using Sequelize. we are using a .env file to pass the credentials.
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: 0,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: 0,
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};