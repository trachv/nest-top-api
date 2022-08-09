import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { disconnect } from 'mongoose';
import { AuthDto } from './../src/auth/dto/auth.dto';
;
const loginDto: AuthDto = {
  login: 'test@test',
  password: '111'
};


describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;
  let token: string;

  beforeAll(done => {
    done()
  })

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST) - success', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send(loginDto)
      .expect(200)
      .then(({ body }: request.Response) => {
        expect(body.accsess_token).toBeDefined();
      });
  });

  it('/auth/login (POST) - fail password', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...loginDto, password:'1111'})
      .expect(401, {
        statusCode: 401,
        message: "wrong password",
        error: "Unauthorized"
      });
  });

  it('/auth/login (POST) - fail login', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...loginDto, login: 'tesst@test' })
      .expect(401, {
        statusCode: 401,
        message: "User not found",
        error: "Unauthorized"
      });
  });


  afterAll((done) => {
    disconnect();
    done();
  });

});
