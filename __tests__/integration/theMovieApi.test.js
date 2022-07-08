require('dotenv').config();

const frisby = require('frisby');

describe('Test get /:id route', () => {
  test('Movie Api not Found Movie', async () => frisby.get('http://localhost:3000/10')
    .expect('status', 404)
    .then((res) => {
      expect(res.json.message).toBe('Not Found');
    }));
  test('Movie Api Found Movie', async () => frisby.get('http://localhost:3000/550')
    .expect('status', 200)
    .then((res) => {
      expect(res.json.id).toBe(550);
      expect(res.json.original_title).toBe('Fight Club');
    }));
  test('Movie Api Not a Number param', async () => frisby.get('http://localhost:3000/xablau')
    .expect('status', 404)
    .then((res) => {
      expect(res.json.message).toBe('Not Found');
    }));
});

describe('Test post /:id route', () => {
  test('Movie Api not Found Movie', async () => frisby.post('http://localhost:3000/10')
    .expect('status', 404)
    .then((res) => {
      expect(res.json.message).toBe('Not Found');
    }));
  test('Insert Movie into db', async () => frisby.post('http://localhost:3000/550')
    .expect('status', 200)
    .then((res) => {
      expect(res.json.id).toBe(550);
      expect(res.json.original_title).toBe('Fight Club');
    }));
  test('Movie Api already exists Movie', async () => frisby.post('http://localhost:3000/550')
    .expect('status', 409)
    .then((res) => {
      expect(res.json.message).toBe('Value already exists!!');
    }));
  test('Movie Api Not a Number param', async () => frisby.post('http://localhost:3000/xablau')
    .expect('status', 404)
    .then((res) => {
      expect(res.json.message).toBe('Not Found');
    }));
});

describe('Test GET /database/:id route', () => {
  test('Get Movie values into db', async () => frisby.get('http://localhost:3000/database/9')
    .then((res) => {
      expect(res.json.message).toBe('Value don\'t exists!!');
    }));
  test('Get Movie withgit Not a Number param', async () => frisby.get('http://localhost:3000/database/xablau')
    .expect('status', 404)
    .then((res) => {
      expect(res.json.message).toBe('Value don\'t exists!!');
    }));
});
