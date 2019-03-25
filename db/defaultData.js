const db = require('./database.js');

module.exports.starterDbInfo = () => {
  db.User.create({
    username: 'Laura',
    location: 'San Diego',
  }); // 1

  db.Occasion.create({ type: 'casual' }); // 1
  db.Occasion.create({ type: 'formal' }); // 2
  db.Occasion.create({ type: 'business' }); // 3
  db.Occasion.create({ type: 'going out' }); // 4
  db.Occasion.create({ type: 'athletic' }); // 5

  db.Attribute.create({ type: 'long' }); // 1
  db.Attribute.create({ type: 'short' }); // 2
  db.Attribute.create({ type: 'light' }); // 3
  db.Attribute.create({ type: 'heavy' }); // 4
  db.Attribute.create({ type: 'tight' }); // 5
  db.Attribute.create({ type: 'loose' }); // 6
  db.Attribute.create({ type: 'comfortable' }); // 7
  db.Attribute.create({ type: 'basic' }); // 8
  db.Attribute.create({ type: 'shiny' }); // 9
  db.Attribute.create({ type: 'solid' }); // 10
  db.Attribute.create({ type: 'patterned' }); // 11

  db.Color.create({ type: 'red' }); // 1
  db.Color.create({ type: 'pink' }); // 2
  db.Color.create({ type: 'orange' }); // 3
  db.Color.create({ type: 'yellow' }); // 4
  db.Color.create({ type: 'green' }); // 5
  db.Color.create({ type: 'blue' }); // 6
  db.Color.create({ type: 'purple' }); // 7
  db.Color.create({ type: 'white' }); // 8
  db.Color.create({ type: 'black' }); // 9
  db.Color.create({ type: 'tan' }); // 10

  db.Category.create({ type: 'one-piece' }); // 1
  db.Category.create({ type: 'top' }); // 2
  db.Category.create({ type: 'bottom' }); // 3
  db.Category.create({ type: 'outerwear' }); // 4
  db.Category.create({ type: 'accessory' }); // 5
  db.Category.create({ type: 'shoes' }); // 6

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552727035/shirt2.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 1
  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552726975/shirt-1.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 2
  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552727112/dress-1.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 3

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552727133/outerwear-1.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 4

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552727208/acc-1.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 5

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552727242/bottom-1.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 6

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924027/blackShorts.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 7

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924795/patternedScarf.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 8

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924701/pinkHandbag.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 9

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924696/yellowPointedFlats.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 10

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924692/brownBag.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 11

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924688/yellowHandbag.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 12

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924685/stripedWedges.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 13

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924048/longSkirt.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 14

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924033/whiteShorts.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 15

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924023/pinkSkirt.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 16

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924019/patternedCropTop.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 17

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924015/whiteLeatherJacket.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 18

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924011/tanLeatherJacket.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 19

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552924002/casualJacket.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 20

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552923300/tanCardigan.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 21

  db.Img.create({
    img_url_fullsize_clean: 'https://res.cloudinary.com/opticloset/image/upload/v1552922719/yellowCropTop.png',
    img_url_fullsize_og: 'img url - OG',
    img_url_thumbnail: 'img url - thumbnail',
  }); // 22
};
module.exports.starterClothes = () => {
  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552727035/shirt2.png
    id_user: 1,
    id_category: 2,
    id_occasion: 3,
    attribute: 'long, patterned, loose, light',
    id_image: 1,
    color: 'yellow',
    price: 100,
    count_worn: 6,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552726975/shirt-1.png
    id_user: 1,
    id_category: 2,
    id_occasion: 1,
    attribute: 'light, loose, comfortable, basic, solid',
    id_image: 2,
    color: 'blue',
    price: 50,
    count_worn: 14,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552727112/dress-1.png
    id_user: 1,
    id_category: 1,
    id_occasion: 1,
    attribute: 'short, light, loose, comfortable, patterned',
    id_image: 3,
    color: 'white, blue',
    price: 120,
    count_worn: 4,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552727133/outerwear-1.png
    id_user: 1,
    id_category: 4,
    id_occasion: 1,
    attribute: 'long, heavy, loose, comfortable, basic, solid',
    id_image: 4,
    color: 'blue',
    price: 15,
    count_worn: 5,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552727242/bottom-1.png
    id_user: 1,
    id_category: 3,
    id_occasion: 4,
    attribute: 'short, tight, solid',
    id_image: 5,
    color: 'black',
    price: 60,
    count_worn: 2,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552727208/acc-1.png
    id_user: 1,
    id_category: 5,
    id_occasion: 4,
    attribute: 'shiny',
    id_image: 6,
    color: 'yellow',
    price: 50,
    count_worn: 5,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924027/blackShorts.png
    id_user: 1,
    id_category: 3,
    id_occasion: 4,
    attribute: 'short, loose, shiny, solid',
    id_image: 7,
    color: 'black',
    price: 60,
    count_worn: 1,
  });


  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924795/patternedScarf.png
    id_user: 1,
    id_category: 5,
    id_occasion: 3,
    attribute: 'loose',
    id_image: 8,
    color: 'blue, white',
    price: 40,
    count_worn: 1,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924701/pinkHandbag.png
    id_user: 1,
    id_category: 5,
    id_occasion: 1,
    attribute: 'solid, basic, heavy',
    id_image: 9,
    color: 'pink',
    price: 150,
    count_worn: 25,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924696/yellowPointedFlats.png
    id_user: 1,
    id_category: 6,
    id_occasion: 3,
    attribute: 'light, comfortable',
    id_image: 10,
    color: 'yellow',
    price: 40,
    count_worn: 6,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924692/brownBag.png
    id_user: 1,
    id_category: 5,
    id_occasion: 1,
    attribute: 'heavy, basic, solid',
    id_image: 11,
    color: 'tan',
    price: 75,
    count_worn: 6,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924688/yellowHandbag.png
    id_user: 1,
    id_category: 5,
    id_occasion: 1,
    attribute: 'light, solid, basic',
    id_image: 12,
    color: 'yellow',
    price: 75,
    count_worn: 3,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924685/stripedWedges.png
    id_user: 1,
    id_category: 6,
    id_occasion: 1,
    attribute: 'light, patterned',
    id_image: 13,
    color: 'blue, white',
    price: 55,
    count_worn: 5,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924048/longSkirt.png
    id_user: 1,
    id_category: 3,
    id_occasion: 4,
    attribute: 'long, tight, light, patterned',
    id_image: 14,
    color: 'blue, red',
    price: 25,
    count_worn: 2,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924033/whiteShorts.png
    id_user: 1,
    id_category: 3,
    id_occasion: 1,
    attribute: 'short, light, comfortable',
    id_image: 15,
    color: 'white',
    price: 75,
    count_worn: 2,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924023/pinkSkirt.png
    id_user: 1,
    id_category: 3,
    id_occasion: 4,
    attribute: 'short, loose, comfortable, solid',
    id_image: 16,
    color: 'pink',
    price: 125,
    count_worn: 6,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924019/patternedCropTop.png
    id_user: 1,
    id_category: 2,
    id_occasion: 4,
    attribute: 'short, tight, patterned',
    id_image: 17,
    color: 'blue, red',
    price: 100,
    count_worn: 4,
  });

  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924015/whiteLeatherJacket.png
    id_user: 1,
    id_category: 4,
    id_occasion: 4,
    attribute: 'short, heavy, solid',
    id_image: 18,
    color: 'white',
    price: 100,
    count_worn: 3,
  });
  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924011/tanLeatherJacket.png
    id_user: 1,
    id_category: 4,
    id_occasion: 4,
    attribute: 'heavy, solid',
    id_image: 19,
    color: 'tan',
    price: 100,
    count_worn: 3,
  });
  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552924002/casualJacket.png
    id_user: 1,
    id_category: 4,
    id_occasion: 1,
    attribute: 'long, heavy, solid, loose, comfortable',
    id_image: 20,
    color: 'grey',
    price: 100,
    count_worn: 3,
  });
  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552923300/tanCardigan.png
    id_user: 1,
    id_category: 2,
    id_occasion: 1,
    attribute: 'light, loose, comfortable, basic, solid',
    id_image: 21,
    color: 'tan',
    price: 100,
    count_worn: 3,
  });
  db.Clothing_Item.create({
    // https://res.cloudinary.com/opticloset/image/upload/v1552922719/yellowCropTop.png
    id_user: 1,
    id_category: 2,
    id_occasion: 1,
    attribute: 'short, loose, solid',
    id_image: 22,
    color: 'yellow',
    price: 100,
    count_worn: 3,
  });
};
