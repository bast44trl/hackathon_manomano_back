const pool = require("../db-config");

const getAll = () => {
  return pool
    .promise()
    .query(`SELECT * FROM products`)
    .then(([results]) => results);
};

const getOne = (id) => {
  return pool
    .promise()
    .query(`SELECT * FROM products WHERE id_product = ?`, [id])
    .then(([results]) => results[0]);
};

const getAllByUser = (id) => {
  return pool
    .promise()
    .query(
      "SELECT p.* FROM users_products as up INNER JOIN products as p ON up.id_product = p.id_product WHERE up.id_user = ?",
      [id]
    )
    .then(([results]) => results[0]);
};

const createUserProduct = (id_user, id_product) => {
  return pool
    .promise()
    .query("INSERT users_products (id_user, id_product) VALUES (?,?)", [
      id_user,
      id_product,
    ])
    .then(([results]) => results.affectedRows === 1);
};

const destroyUserProduct = (id_user, id_product) => {
  return pool
    .promise()
    .query("DELETE FROM users_products WHERE id_user = ? AND id_product = ?", [
      id_user,
      id_product,
    ])
    .then(([results]) => results.affectedRows === 1);
};

module.exports = {
  getAll,
  getOne,
  getAllByUser,
  createUserProduct,
  destroyUserProduct,
};
