/*import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import res from 'express/lib/response';
import server from '../app';

use(chaiHttp);

describe('Articles end point testing', () => {
  it('should retrieve all articles', async () => {
    const res = await request(server).get('/api/v1/articles/');
    expect(res).to.have.status([200]);
    expect(res.type).to.have.equal('application/json');
  });
  it('should not retrieve any articles', async () => {
    const res = await request(server).get('/api/v1/articles/uuuuu');
    expect(res).to.have.status([404]);
  });
});*/
"use strict";