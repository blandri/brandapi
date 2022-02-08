import { expect, request, use } from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import res from 'express/lib/response';
import app from '../src/app';

use(chaiHttp);

describe('Comments end point testing', () => {
  /*it('should create a comment', async () => {
    const res = await request(app).post('/api/v1/comment/:articleid');
    expect(res).to.have.status([200]);
    expect(res.type).to.have.equal('application/json');
  });*/
  it('should not create a comment', async () => {
    const res = await request(app).post('/api/v1/comment/:artcleid/kkkk');
    expect(res).to.have.status([404]);
  });
  /*it('should get comments', async () => {
    const res = await request(app).get('/api/v1/comment/:artcleid');
    expect(res).to.have.status([200]);
    expect(res.type).to.have.equal('application/json');
  });*/
  it('should not get any comment', async () => {
    const res = await request(app).get('/api/v1/comment/:artcleid/jjj');
    expect(res).to.have.status([404]);
  });
});
