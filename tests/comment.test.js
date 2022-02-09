import { expect, request, use } from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import res from 'express/lib/response';
import app from '../src/app';

use(chaiHttp);

describe('cmment end point testing', () => {
  it('should create a comment', (done) => {
    request(app).post('/api/v1/comment/:artcleid');
    expect(res).to.have.status([200]);
    done();
  });
  it('should not create a comment', (done) => {
    request(app).post('/api/v1/commenttt/:artcleid');
    expect(res).to.have.status([404]);
    done();
  });
});
