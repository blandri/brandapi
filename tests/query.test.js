import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import Querry from '../src/models/query';
import { generateToken } from '../src/helpers/jwtFunctions';

chai.use(chaiHttp);

describe('QUERIES END POINTS', () => {
  let testSchema = new Querry({
    email: 'landry@gmail.com',
    message: 'lorem ispum',
  });
  before(async () => {
    await testSchema.save();
  });

  describe('RETREIVE ALL QUERIES', () => {
    it('it will get all queries', async () => {
      const res = await chai.request(app).get('/api/v1/queries/');

      chai.expect(res.body).to.be.a('array');
      chai.expect(res.status).to.be.eq(200);
    });
    it("it won't get all queries on wrong route", async () => {
      const res = await chai.request(app).get('/api/v1/queri/');
      chai.expect(res.status).to.be.eq(404);
    });
  });

  /*it('it should not get any query without authentication', async () => {
      const res = await chai
        .request(app)
        .get('/api/v1/queries/getOne/' + testSchema._id);
      chai.expect(res.status).to.be.eq(401);
      chai.expect(res.error.text).to.be.eq('Access denied!!!');
    });
  });*/

  /*describe('CREATE QUERY', () => {
    it('it should not create query with out email', async () => {
      const res = await chai.request(app).post('/api/v1/queries/').send({
        email: '',
        message: 'nice to meet you',
      });
      chai.expect(res.status).to.be.eq(400);
      chai.expect(res.body.error).to.be.eq('Email is required!!!');
    });*/

  it('it should not create query on wrong route', async () => {
    const res = await chai.request(app).post('/api/v1/querie/').send({
      email: 'landry@gmai.com',
      message: '',
    });
    chai.expect(res.status).to.be.eq(404);
  });

  /*describe('DELETE QUERY', () => {
    it('it should delete one query', async () => {
      const token = await generateToken({ id: testSchema._id });
      const res = await chai
        .request(app)
        .delete('/api/v1/queries/delete/' + testSchema._id)
        .set({ Authorization: `Bearer ${token}` });
      chai.expect(res.status).to.be.eq(202);
      chai.expect(res.body.message).to.be.eq('query deleted');
    });

    it('it should not delete on wrong route', async () => {
      const token = await generateToken({ id: testSchema._id });
      const res = await chai
        .request(app)
        .delete('/api/v1/queries/dele/' + testSchema._id)
        .set({ Authorization: `Bearer ${token}` });
      chai.expect(res.status).to.be.eq(404);
      chai.expect(res).have.property('error');
    });
  });*/
});
