const db = require('./database.js');

module.exports.getClosetByUser = (userId, callback) => {
  console.log(userId);
  db.Clothing_Item.findAll({
    where: {
      id_user: userId,
    },
  }).then((result) => {
    callback(null, result);
  }).catch((err) => {
    callback(err);
  });
};
