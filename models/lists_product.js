const connection = require("../db-config");

const getAll = (id_list) => {
  return connection
    .promise()
    .query(`SELECT * FROM lists_products`)
    .then(([results]) => results);
};

const getProductsByList = (id_list) => {
  return connection
    .promise()
    .query(`SELECT id_product FROM lists_products WHERE id_list = ?`, [id_list])
    .then(([results]) => results);
};

const getListsByProduct = (id_product) => {
  return connection
    .promise()
    .query(`SELECT id_list FROM lists_products WHERE id_product = ?`, [
      id_product,
    ])
    .then(([results]) => results);
};

const create = (newList) => {
  return connection
    .promise()
    .query(`INSERT INTO lists_products SET ?`, [newList])
    .then(([result]) => result.insertId);
};

const deleteProductsFromList = ({ id_list }) => {
  return connection
    .promise()
    .query(`DELETE FROM lists_products WHERE id_list = ?`, [id_list]);
};

const deleteListHasProducts = (id_list, id_product) => {
  return connection
    .promise()
    .query(`DELETE FROM lists_products WHERE id_product = ? AND id_list = ?`, [
      id_product,
      id_list,
    ]);
};

module.exports = {
  getAll,
  create,
  deleteListHasProducts,
  deleteProductsFromList,
  getProductsByList,
  getListsByProduct,
};
