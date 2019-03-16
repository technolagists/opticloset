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

module.exports.updateClothingAsWorn = (clothingId, callback) => {
  // console.log(clothingId);
  db.Clothing_Item.findOne({
    where: {
      id_clothing_item: clothingId,
    },
  }).then((option) => {
    return option.increment('count_word'); // assumes `option` always exists
  }).then((option) => {
    return option.reload();
  }).then((option) => {
    callback(null, option);
  })
    .catch((err) => {
      callback(err);
    });
};

// get info by ID helpers below
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
