import { MicroApp } from '@/app';
import supertest from 'supertest';

describe('app', () => {
  let request: any;

  beforeEach(() => {
    request = supertest(new MicroApp().express);
  });

  it('should return a successful response for GET /', (done) => {
    request.get('/').expect(200, done);
  });
});
