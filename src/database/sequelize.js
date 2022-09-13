const sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const usermdl = require("../models/user");
const users = require("./mock_user");
// const adressmdl = require("../models/user_adresse");


const db = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mariadb",
    logging: false,
  }
);

const userModel = usermdl(db, sequelize);

const initDb = async () => {
  try {
    await db.authenticate();
    console.log(`${process.env.DB_NAME} IL Y A PAS`);
    await db.sync({ force: true });
    console.log(`${process.env.DB_NAME} D'erreur`);
    users.map(async (user) => {
      await userModel.create({
        nom: user.nom,
        prenom: user.prenom,
        naissance: user.naissance,
        email: user.email,
        password: user.password,
        telephone: user.telephone,
      });
    });
  } catch (error) {
    console.error(` Error: ${error}`);
  }
};

module.exports = {
  initDb,
};
