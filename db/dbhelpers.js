const Sequelize = require('sequelize');
const db = require('./database.js');

module.exports.getClosetByUser = (username, isSelling, callback) => {
  db.User.findOrCreate({
    where: {
      username,
    },
  }).then((user) => {
    db.Clothing_Item.findAll({
      where: {
        id_user: user[0].dataValues.id_user,
        selling: isSelling,
      },
    }).then((clothes) => {
      const catImagePromises = clothes.map((clothingItem) => {
        return db.Category.findOne({
          where: {
            id_category: clothingItem.id_category,
          },
        })
          .then((category) => {
            return db.Img.findOne({
              where: {
                id_img: clothingItem.id_image,
              },
            })
              .then((image) => {
                const retClothingItem = Object.assign(clothingItem);
                retClothingItem.dataValues.imageUrl = image.img_url_fullsize_clean;
                retClothingItem.dataValues.category = category.type;
                return retClothingItem;
              });
          });
      });
      Promise.all(catImagePromises)
        .then((newClothes) => {
          callback(null, newClothes);
        })
        .catch((err) => {
          callback(err);
        });
    });
  });
};

module.exports.updateClothingAsWorn = (clothingId) => {
  // console.log(clothingId);
  return db.Clothing_Item.findOne({
    where: {
      id_clothing_item: clothingId,
    },
  }).then((option) => {
    return option.increment('count_worn'); // assumes `option` always exists
  }).then((option) => {
    return option.reload();
  }).then((option) => {
    return option;
  })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.toggleClothingForSale = (clothingId) => {
  return db.Clothing_Item.update(
    { selling: Sequelize.literal('NOT selling') },
    {
      where: {
        id_clothing_item: clothingId,
      },
    },
  ).then((result) => {
    return result;
  })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteItem = (clothingId) => {
  // console.log(clothingId);
  return db.Clothing_Item.destroy({
    where: {
      id_clothing_item: clothingId,
    },
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
