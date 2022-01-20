const connection = require("../db-config");

const getAllList = () => {
	let sql = `SELECT * FROM lists`;

	return connection.promise().query(sql);
};

const getOneList = (id_list) => {
    return connection
    .promise()
    .query(" SELECT * FROM lists WHERE id_list = ? ", [id_list]);
};

const postList = (list) => {
    return connection
     .promise()
     .query(
         'INSERT INTO lists (name, id_user ) VALUES(?,?)',
         [
             list.name,
             list.id_user,
            
         ]
     )
     .then(([results]) => {
         return { id_list: results.insertId, ...list };
     });
};

const deleteOneList = (id)=>{
    return connection
      .promise()
      .query(
        'DELETE FROM lists WHERE id_list = ?',[id])
      .then(([results]) => results.affectedRows === 1);  
  }

module.exports = {
	getAllList,
    getOneList,
    postList,
    deleteOneList,
};
