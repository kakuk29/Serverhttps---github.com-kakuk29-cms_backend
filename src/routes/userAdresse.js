const express = require("express");
const routeur = express.Router();
const userACtrl = require('../controllers/userAdresse.js');


// routes
routeur.get("/", userACtrl.getAllUser);
routeur.get("/:id", userACtrl.getOneUser);
routeur.post("/", userACtrl.createUser);
routeur.put("/:id", userACtrl.updateUser);
routeur.delete("/:id", userACtrl.deleteUser);
routeur.delete("/", userACtrl.deleteAllUser);

// export
module.exports = routeur;
