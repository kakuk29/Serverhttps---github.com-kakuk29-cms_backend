let users = require("../database/mock_user");

const getUniqueId = (array) => {
  let id = 1;
  if (array.length > 0) {
    id = array[array.length - 1].id + 1;
  }
  return id;
};

exports.getAllUser = (req, res) => {
  const user = users;
  const message = user
    ? `il y a ${users.length} users`
    : `il n'y a pas de users`;
  res.json({ status: 200, message: message, data: user });
};

exports.getOneUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((p) => p.id == id);
  const message = user
    ? `un user a bien été trouver`
    : `Bruit de cricket`;
  res.json({ status: 200, message: message, data: user });
};

exports.createUser = (req, res) => {
  const id = getUniqueId(users);
  const userCreated = { ...req.body, ...{ id: id, created: new Date() } };
  users.push(userCreated);
  const message = `le user ${userCreated.nom} a bien été créer`;
  res.json({ status: 200, message: message, data: userCreated });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const userUpdated = { ...req.body, id: id };
  users = users.map((p) => {
    return p.id == id ? userUpdated : p;
  });
  const message = `le user ${userUpdated.nom} a bien été mis à jour`;
  res.json({ status: 200, message: message, data: userUpdated });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const userDeleted = users.find((p) => p.id == id);
  users = users.filter((p) => p.id != id);
  const message = `le user ${userDeleted.nom} a bien été supprimer`;
  res.json({ status: 200, message: message, data: userDeleted });
};

exports.deleteAllUser = (req, res) => {
  users = [];
  const message = `Tous les users ont bien été supprimer`;
  res.json({ status: 200, message: message, data: users });
};
