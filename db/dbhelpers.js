const db = require('./database.js');

// retrieve all clothing_items records for a particular user
module.exports.getClosetByUser = (username, callback) => {
  db.User.findOrCreate({ // find the user record linked to input usernam
    where: {
      username,
    },
  }).then((user) => {
    db.Clothing_Item.findAll({ // retrieve all clothing items for that user
      where: {
        id_user: user[0].dataValues.id_user,
      },
    }).then((clothes) => {
      const catImagePromises = clothes.map(clothingItem => db.Category.findOne({ // retrieve the categoy record based on categoryId
        where: {
          id_category: clothingItem.id_category,
        },
      })
        .then(category => db.Img.findOne({ // retrieve the Img record based on the imageId
          where: {
            id_img: clothingItem.id_image,
          },
        })
          .then((image) => { // then adds 3 properties on the result object
            const retClothingItem = Object.assign(clothingItem);
            retClothingItem.dataValues.imageUrl = image.img_url_fullsize_clean; // url of the image without background
            retClothingItem.dataValues.category = category.type; // category name
            retClothingItem.dataValues.lastUpdated = new Date(clothingItem.updatedAt).toString().slice(4, 15); // formatted last update date
            return retClothingItem;
          })));
      Promise.all(catImagePromises) // making catImagePromises a promise
        .then((newClothes) => {
          callback(null, newClothes); // then invoke callback on result object
        })
        .catch((err) => {
          callback(err);
        });
    });
  });
};

// increments the count worn of a clothing_item by 1
module.exports.updateClothingAsWorn = clothingId => db.Clothing_Item.findOne({
  where: {
    id_clothing_item: clothingId,
  },
}).then(option => option.increment('count_worn')) // assumes `option` always exists
  .then(option => option.reload()).then(option => option)
  .catch((err) => {
    console.log(err);
  });

// delete clothing_item given a clothingId
module.exports.deleteItem = clothingId => db.Clothing_Item.destroy({
  where: {
    id_clothing_item: clothingId,
  },
});

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
