import { expect, request, use } from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import res from 'express/lib/response';
import app from '../src/app';

use(chaiHttp);

describe('Articles end point testing', () => {
  it('should retrieve all articles', async () => {
    const res = await request(app).get('/api/v1/articles/');
    expect(res).to.have.status([200]);
    expect(res.type).to.have.equal('application/json');
  });
  it("Should not retrieve the articles", async () => {
    const res = await request(app).get("/api/v1/aritcle/")
    expect(res).to.have.status([404])
})
});
