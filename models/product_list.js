const connection = require("../db-config");

const createListHasProducts = ({ id_product }) => {
  return connection
    .promise()
    .query(`INSERT INTO lists_has_products (id_product) VALUES (?)`, [
      id_product,
    ])
    .then(([result]) => {
      return { id_product };
    });
};

const deleteListHasProducts = ({ id_product, id_list }) => {
  return connection
    .promise()
    .query(
      `DELETE FROM lists_has_products WHERE id_product = ? AND id_list = ?`,
      [id_product, id_list]
    );
};

module.exports = {
  createListHasProducts,
  deleteListHasProducts,
};
