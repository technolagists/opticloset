/* eslint-disable no-undef */
const request = require('supertest');
const server = require('../server/app');

describe('homepage', () => {
  test('should respond with a 200 Status code and "hello world!"', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('hello world!');
  });
});

describe('/weather endpoint', () => {
  test('without a location, should respond with a 200 Status Code and an object containing "temp" and "weather" properties', async () => {
    const response = await request(server).get('/weather');
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('temp');
    expect(response.body).toHaveProperty('weather');
  });
  test('with a location, should respond with a 200 Status Code and an object containing "temp" and "weather" properties', async () => {
    const response = await request(server).get('/weather', {
      latitude: '29.951065',
      longitude: '-90.071533',
    });
    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('temp');
    expect(response.body).toHaveProperty('weather');
  });
});

describe('/location endpoint', () => {
  test('should respond with a 200 Status Code and a body containing an address in the USA', async () => {
    const response = await request(server).get('/location?latlng=29.951065,-90.071533');
    expect(response.status).toEqual(200);
    expect(response.body[0]).toContain('USA');
  });
});

describe('/users endpoint', () => {
  test('should respond with a 200 Status Code and a body containing an address in the USA', async () => {
    const response = await request(server).post('/users').send({ "username": 'test' });
    expect(response.status).toEqual(200 || 201);
    expect(JSON.parse(response.text)).toHaveProperty('username');
    expect(JSON.parse(response.text).username).toBe('test');
  });
});
// describe('login', () => {
//   test('Users should be able to log in', () => {
//     return request(server)
//       .put('/login')
//       .then(response, () => {
//         expect(response.statusCode).toBe(201);
//       });
//   });
// });

// describe('logout', () => {
//   test('Users should be able to log out', () => {
//     return request(server)
//       .get('/logout')
//       .then(response, () => {
//         expect(response.statusCode).toBe(200);
//       });
//   });
// });
