import { expect, request, use } from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import res from 'express/lib/response';
import app from '../src/app';

use(chaiHttp);

describe('Query end point testing', () => {
  it('should retrieve all queries', async () => {
    const res = await request(app).get('/api/v1/queries/');
    expect(res).to.have.status([200]);
    expect(res.type).to.have.equal('application/json');
  });
  it('Should not retrieve any query', async () => {
    const res = await request(app).get('/api/v1/queries/');
    expect(res).to.have.status([200]);
  });
  
});
