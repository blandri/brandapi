import { expect, request, use } from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import res from 'express/lib/response';
import app from '../src/app';

use(chaiHttp);

describe('Users end point testing', () => {
  it('should sign you up', async () => {
    const res = await request(app).post('/api/v1/user/register/');
    expect(res).to.have.status([406]);
    expect(res.type).to.have.equal('application/json');
  });

  it('Should not sign you up', async () => {
    const res = await request(app).post('/api/v1/user/register/');
    expect(res).to.have.status([406]);
  });

  it('Should log you in', async () => {
    const res = await request(app).post('/api/v1/user/login/');
    expect(res).to.have.status([200]);
  });
  it('Should not log you in', async () => {
    const res = await request(app).post('/api/v1/user/login/');
    expect(res).to.have.status([401]);
  });
});
