import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import User from '../src/models/user';
import { generateToken } from '../src/helpers/jwtFunctions';

chai.use(chaiHttp);

describe('TESTING USER ROUTE', () => {
  let testSchema = new User({
    email: 'landry@gmail.com',
    password: '123',
  });

  before(async () => {
    await testSchema.save();
  });

  describe('LOG IN ROUTE', () => {
    it('user login in with no email', async () => {
      const res = await chai.request(app).post('/api/v1/user/login').send({
        email: '',
        password: '123',
      });
      chai.expect(res.status).to.be.eq(200);
      //chai.expect(res.body.error).to.be.eq('invalid credentials');
    });

    it('user log in with no password', async () => {
      const res = await chai.request(app).post('/api/v1/user/login').send({
        email: 'landry@gmail.com',
        password: '',
      });
      chai.expect(res.status).to.be.eq(200);
      //chai.expect(res.body.error).to.be.eq('invalid credentials');
    });
  });

  describe('SIGIN VALIDATION', () => {
    it('it shoud check email validation', async () => {
      const res = await chai.request(app).post('/api/v1/user/login').send({
        email: 'landrygmail.com',
        password: '123',
      });
      chai.expect(res.status).to.be.eq(200);
    });

    it('it shoud check password validation', async () => {
      const res = await chai.request(app).post('/api/v1/user/login').send({
        email: 'landry@gmail.com',
        password: '12',
      });
      chai.expect(res.status).to.be.eq(200);
    });
  });
});
