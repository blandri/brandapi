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

  describe('SIGN IN ROUTE', () => {
    before(async () => {
      await User.deleteMany({});
    });

    it('user sign in with no email', async () => {
      const res = await chai.request(app).post('/api/v1/user/register').send({
        email: '',
        password: '123',
      });
      chai.expect(res.status).to.be.eq(400);
      chai.expect(res.body.error).to.be.eq('Email is required!!!');
    });

    it('user sign in with no password', async () => {
      const res = await chai.request(app).post('/api/v1/user/register').send({
        email: 'landry@gmail.com',
        password: '',
      });
      chai.expect(res.status).to.be.eq(400);
      chai.expect(res.body.error).to.be.eq('Password is required!!!');
    });

    it('user register in their account', async () => {
      const res = await chai.request(app).post('/api/v1/user/register').send({
        email: 'landry@gmail.com',
        password: '123',
      });
      chai.expect(res.status).to.be.eq(202);
    });

    it('user register in their account with email arleady exist', async () => {
      // let register = new userModel({
      //
      //      email: "gabin@gmail.com",
      //      password: "pass123#"
      // })
      // await register.save()
      const res = await chai.request(app).post('/api/v1/user/register').send({
        email: 'landry@gmail.com',
        password: '123',
      });
      chai.expect(res.status).to.be.eq(404);
    });
  });

  describe('SIGIN VALIDATION', () => {
    it('it shoud check email validation', async () => {
      const res = await chai.request(app).post('/api/v1/user/register').send({
        email: 'landry@gmail.com',
        password: '123',
      });
      chai.expect(res.status).to.be.eq(400);
      chai.expect(res.body.error).to.be.eq('Email is not valid!!!!');
    });

    it('it shoud check password validation', async () => {
      const res = await chai.request(app).post('/api/v1/user/register').send({
        email: 'gabin@gmail.com',
        password: 'passs123',
      });
      chai.expect(res.status).to.be.eq(400);
      chai
        .expect(res.body.error)
        .to.be.eq(
          'Password must container at least one special character and number!!!'
        );
    });
  });

  describe('USER LOGING IN', () => {
    it('it should login in the user', async () => {
      const res = await chai.request(app).post('/api/v1/user/login').send({
        email: 'landry@gmail.com',
        password: '123',
      });
      chai.expect(res.status).to.be.eq(202);
    });
  });
});
