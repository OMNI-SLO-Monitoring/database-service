import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppService } from './../src/app.service';

/**
 * This is the test comprising the functions of the
 * app controller that are put under testing here.
 */
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ GET', async () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Ok');
  });

  it('/ GET account-worth', () => {
    return request(app.getHttpServer())
      .get('/account-worth')
      .expect(200)
      .expect('9000');
  });

  jest.setTimeout(30000);

  afterAll(async () => {
    await app.close;
  });
});

/**
 * This is the test comprising the functions of the
 * request-handler controller that are put under testing here.
 */
describe('RequestHandler (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ GET request-handler/customer-name', async () => {
    return request(app.getHttpServer())
      .get('/request-handler/customer-name')
      .expect(200)
      .expect('Jeff');
  });

  it('/ GET request-handler/balance', () => {
    return request(app.getHttpServer())
      .get('/request-handler/balance')
      .expect(200)
      .expect('31');
  });

  it('/ POST request-handler/add-customer', () => {
    return request(app.getHttpServer())
      .post('/request-handler/add-customer')
      .expect(201);
  });

  jest.setTimeout(30000);

  afterAll(async () => {
    await app.close;
  });
});
