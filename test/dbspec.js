
const db = require('../db/dbhelpers.js');

test('db.getClosetByUser', (done) => {
  db.getClosetByUser('lauraannpena', false, (err, res) => {
    expect(res.body).toBe(undefined);
    done();
  });
});
// const SequelizeMock = require('sequelize-mock');

// const DBConnectionMock = new SequelizeMock();

// // const dbHelpers = require('../db/dbhelpers')(sequelize, SequelizeMock);

// // const ClothingItem = require('../db/ClothingItem')(sequelize, SequelizeMock);

// const exampleItems = [{
//   id_user: '1',
//   id_category: 'top',
//   price: 50,
//   url_image: 'example.com/image',
//   id_color_primary: 'blue',
//   id_color_secondary: 'grey',
// },
// {
//   id_user: '1',
//   id_category: 'bottom',
//   price: 40,
//   url_image: 'example.com/image2',
//   id_color_primary: 'green',
//   id_color_secondary: 'yellow'
// },
// {id_user: '1',
//   id_category: 'outerwear',
//   price: 70,
//   url_image: 'example.com/image3',
//   id_color_primary: 'white',
//   id_color_secondary: 'grey'
// },
// {
//   id_user: '1',
//   id_category: 'shoes',
//   price: 70,
//   url_image: 'example.com/image3',
//   id_color_primary: 'white',
//   id_color_secondary: 'grey',
// }];

// const exampleOutfits = [{
//   id_user: '1',
//   id_category: 'top',
//   id_clothing_item: 1,
//   date_worn: 3 / 12 / 2019,
// },
// {
//   id_user: '1',
//   id_category: 'bottom',
//   id_clothing_item: 2,
//   date_worn: 3 / 12 / 2019,
// },
// {
//   id_user: '1',
//   id_category: 'outerwear',
//   id_clothing_item: 3,
//   date_worn: 3 / 12 / 2019,
// },
// {
//   id_user: '2',
//   id_category: 'top',
//   id_clothing_item: 4,
//   date_worn: 3 / 12 / 2019,
// }]

// describe('OptiCloset', () => {
//   let item;
//   beforeAll(async () => {
//     const newItem = await ClothingItem.create(exampleItems[0]);
//     item = newItem;
//     return item;
//   });

//   describe('props', () => {
//     Object.keys(exampleItems[0]).forEach(prop => {
//       test(`should have property ${prop}`, async () => {
//         expect(item).toHaveProperty(prop, exampleItems[0][prop]);
//       });
//     });
//   });
//   describe('methods', () => {
//     ['saveNewItem', 'getAllItemsByUserId', 'updateItemById', 'deleteItemById', 'saveItemWorn', 'getItemsWornByUserID' ].forEach(method => {
//       test(`should have a method ${method}`, () => {
//         expect(item[method]).toBeInstanceOf(Function);
//       });
//     });
//     describe('saveNewItem', () => {
//       test(`should return a string 'Item created'`, () => {
//         // call the saveNewItem
//         const expected = saveNewItem(exampleItems[0]);
//         expect(expected).toBe('Item created');
//       });
//     });
//     describe('getAllItemsByUserId', () => {
//       test('should return an array', () => {
//         const expected = getAllItemsByUserId(1);
//         expect(exampleItems[0]).toEqual(expect.arrayContaining(expected));
//       });
//     });
//     describe("updateItemById", () => {
//       test("should update an item in the Database given its itemId and new characteristics", () => {
//         const updatedItem = {
//           id_user: '1',
//           id_category: 'top',
//           price: 30,
//           url_image: 'example.com/image',
//           id_color_primary: 'red',
//           id_color_secondary: 'black'
//         };
//         updateItemById(1, updatedItem);
        
//         expect(exampleItems[0]).toEqual(expect.arrayContaining(expected));
//       });
//     });
//     describe('deleteItemById', () => {
//       test(`should remove an item from a user's closet/the database`, () => {
//         saveNewItem(exampleItems[0]); // add an item
//         deleteItemById(1); // delete the item
//         const userItems = getAllItemsByUserId(1); // retrieve all user's items
//         expect(userItems).toEqual(expect.not.arrayContaining(exampleItems[0])); // 
//       });
//     });
//     describe('getItemsWornByUserID', () => {
//       test('should retrieve all items worn by userId', () => {
//         const expected = getItemsWornByUserID(1);
//         expect(exampleOutfits[0]).toEqual(expect.arrayContaining(expected));
//       });
//     });
//     describe('saveItemWorn', () => {
//       test('should save all items of items in the database', () => {
//         const outfit = [example[0], example[1], example[2]];
//         saveItemWorn(outfit);
//         const expected = getItemsWornByUserID(1);
//         expect(exampleOutfits[0]).toEqual(expect.arrayContaining(expected));
//       });
//     });
//   });
// });
