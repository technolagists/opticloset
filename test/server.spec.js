const request = require('supertest');
const server = require('../server/server');

describe('homepage', () => {
  test('Should respond to the GET method', () => {
    return request(server)
      .get('/')
      .then(response, () => {
        expect(response.statusCode).toBe(200);
      });
  });
  test('Should return a list of all clothing items for a user in JSON format', () => {
    return request(server)
      .get('/allItems/:userId')
      .then(response, () => {
        expect(response.type).toBe(/json/);
      });
  });
});

describe('login', () => {
  test('Users should be able to log in', () => {
    return request(server)
      .put('/login')
      .then(response, () => {
        expect(response.statusCode).toBe(201);
      });
  });
});

describe('logout', () => {
  test('Users should be able to log out', () => {
    return request(server)
      .get('/logout')
      .then(response, () => {
        expect(response.statusCode).toBe(200);
      });
  });
});
