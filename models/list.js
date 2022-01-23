const pool = require("../db-config");

const getAllList = () => {
  let sql = `SELECT * FROM lists`;

  return pool.promise().query(sql);
};

const getOneList = (id_list) => {
  return pool
    .promise()
    .query(" SELECT * FROM lists WHERE id_list = ? ", [id_list]);
};

const postList = (list) => {
  return pool
    .promise()
    .query("INSERT INTO lists (name, id_user ) VALUES(?,?)", [
      list.name,
      list.id_user,
    ])
    .then(([results]) => {
      return { id_list: results.insertId, ...list };
    });
};

const update = (id, attributesToUpdate) => {
  let sql = `UPDATE lists SET`;
  let oneValue = false;
  let sqlValues = [];

  if (attributesToUpdate.id_user) {
    sql += `id_user = ? `;
    sqlValues.push(attributesToUpdate.id_user);
    oneValue = true;
  }
  if (attributesToUpdate.name) {
    sql += oneValue ? `, name = ?` : ` name = ?`;
    sqlValues.push(attributesToUpdate.name);
    oneValue = true;
  }

  sql += ` WHERE id_list = ?`;
  sqlValues.push(id);
  return pool
    .promise()
    .query(sql, sqlValues)
    .then(([result]) => result.affectedRows === 1);
};

const deleteOneList = (id) => {
  return pool
    .promise()
    .query("DELETE FROM lists WHERE id_list = ?", [id])
    .then(([results]) => results.affectedRows === 1);
};

module.exports = {
  getAllList,
  getOneList,
  postList,
  update,
  deleteOneList,
};
