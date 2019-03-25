require('dotenv').config();
const Sequelize = require('sequelize');

// to clear and rebuild database uncomment on line 231

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

// for connection to postgres locally
// const sequelize = new Sequelize('opticloset', 'laurapena', '', {
//   host: 'localhost',
//   dialect: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000,
//   },
// });

// confirm that connection to remote DB has been made
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  })
  .done();

const User = sequelize.define('user', {
  id_user: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.STRING,
  },
  longitude: {
    type: Sequelize.STRING,
  },
});

const Category = sequelize.define('category', {
  id_category: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


const Img = sequelize.define('img', {
  id_img: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  img_url_fullsize_clean: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  img_url_fullsize_og: {
    type: Sequelize.STRING,
  },
  img_url_thumbnail: {
    type: Sequelize.STRING,
  },
});


const Occasion = sequelize.define('occasion', {
  id_occasion: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


const Attribute = sequelize.define('attribute', {
  id_attribute: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


const Color = sequelize.define('color', {
  id_color: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


const Clothing_Item = sequelize.define('clothing_item', {
  id_clothing_item: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false,
    // creating foreign key
    references: {
      // This is a reference to another model
      model: User,
      // This is the column name of the referenced model
      key: 'id_user',
      // This declares when to check the foreign key constraint. PostgreSQL only.
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  id_category: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id_category',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  id_occasion: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Occasion,
      key: 'id_occasion',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  attribute: {
    type: Sequelize.STRING,
    allowNull: false,
    // references: {
    //   model: Attribute,
    //   key: 'id_attribute',
    //   deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    // },
  },
  id_image: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Img,
      key: 'id_img',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  count_worn: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Clothing_Occasion = sequelize.define('clothing_occasion', {
  id_clothing_occasion: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_clothing_item: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Clothing_Item,
      key: 'id_clothing_item',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  id_occasion: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Occasion,
      key: 'id_occasion',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
});

Clothing_Occasion.belongsTo(Clothing_Item);
Clothing_Occasion.belongsTo(Occasion);
Clothing_Item.belongsToMany(Occasion, { through: Clothing_Occasion });
Occasion.belongsToMany(Clothing_Item, { through: Clothing_Occasion });

const Clothing_Attribute = sequelize.define('clothing_attribute', {
  id_clothing_attribute: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_clothing_item: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Clothing_Item,
      key: 'id_clothing_item',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  id_attribute: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Attribute,
      key: 'id_attribute',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
});

Clothing_Attribute.belongsTo(Clothing_Item);
Clothing_Attribute.belongsTo(Attribute);
Clothing_Item.belongsToMany(Attribute, { through: Clothing_Attribute });
Attribute.belongsToMany(Clothing_Item, { through: Clothing_Attribute });

const Clothing_Color = sequelize.define('clothing_color', {
  id_clothing_color: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_clothing_item: {
    type: Sequelize.INTEGER,
    allowNull: false,
    reference: {
      model: Clothing_Item,
      key: 'id_clothing_item',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  id_color: {
    type: Sequelize.INTEGER,
    allowNull: false,
    reference: {
      model: Color,
      key: 'id_color',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
});

Clothing_Color.belongsTo(Clothing_Item);
Clothing_Color.belongsTo(Color);
Clothing_Item.belongsToMany(Color, { through: Clothing_Color });
Color.belongsToMany(Clothing_Item, { through: Clothing_Color });

// Clears and rebuilds the database
sequelize.sync({ force: true });

module.exports = {
  User,
  Category,
  Img,
  Clothing_Item,
  Occasion,
  Attribute,
  Color,
  Clothing_Occasion,
  Clothing_Attribute,
  Clothing_Color,
};
