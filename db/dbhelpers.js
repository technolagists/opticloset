const db = require('./database.js');

module.exports.getClosetByUser = (userId, callback) => {
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

module.exports.getColorById = (colorId, callback) => {
  db.Color.findAll({
    where: {
      id_color: colorId,
    },
  }).then((result) => {
    callback(null, result);
  }).catch((err) => {
    callback(err);
  });
};

module.exports.getAttributeById = (attributeId, callback) => {
  db.Attribute.findAll({
    where: {
      id_attribute: attributeId,
    },
  }).then((result) => {
    callback(null, result);
  }).catch((err) => {
    callback(err);
  });
};

module.exports.getCategoryById = (categoryId, callback) => {
  db.Category.findAll({
    where: {
      id_category: categoryId,
    },
  }).then((result) => {
    callback(null, result);
  }).catch((err) => {
    callback(err);
  });
};

module.exports.getOccasionById = (occasionId, callback) => {
  db.Occasion.findAll({
    where: {
      id_occasion: occasionId,
    },
  }).then((result) => {
    callback(null, result);
  }).catch((err) => {
    callback(err);
  });
};
