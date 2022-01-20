const connection = require("../db-config");

const getAll = () => {
  return connection
    .promise()
    .query(`SELECT * FROM products`)
    .then(([results]) => results);
};

const getOne = (id) => {
  return connection
    .promise()
    .query(`SELECT * FROM products WHERE id_product = ?`, [id])
    .then(([results]) => results[0]);
};

// const create = ({ title, picture, price, review }) => {
//   return connection
//     .promise()
//     .query(
//       `INSERT INTO products (title,
//           picture,
//           price,
//           review) VALUES (?, ?, ?, ?)`,
//       [title, picture, price, review]
//     )
//     .then(([result]) => {
//       const id_product = result.insertId;
//       return { title, picture, price, review, id_product };
//     });
// };

module.exports = {
  getAll,
  getOne,
  // create
};
