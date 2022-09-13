const express = require("express");
const routeur = express.Router();
const userCtrl = require('../controllers/user');


// routes
routeur.get("/", userCtrl.getAllUser);
routeur.get("/:id", userCtrl.getOneUser);
routeur.post("/", userCtrl.createUser);
routeur.put("/:id", userCtrl.updateUser);
routeur.delete("/:id", userCtrl.deleteUser);
routeur.delete("/", userCtrl.deleteAllUser);

// export
module.exports = routeur;
