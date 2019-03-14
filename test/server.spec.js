const request = require('supertest');
const server = require('../server/server');

describe('homepage', () => {
  test('Should respond to the GET method', () => {
    return request(server)
      .get(HOST)
      .then(response, () => {
        expect(response.statusCode).toBe(200);
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
