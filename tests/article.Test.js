import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import Article from '../src/models/article';
import { generateToken } from '../src/helpers/jwtFunctions';
import commentSchema from '../src/models/comment';

chai.use(chaiHttp);

describe('ARTICLES', () => {
  let testSchema = new Article({
    title: 'Test article',
    content: 'Lorem ipsum',
    image: 'URL',

    likes: 0,
  });
  before(async () => {
    await testSchema.save();
  });

  describe('TESTING GET ALL ARTICLES', () => {
    it('it should retrieve all articles', async () => {
      const res = await chai.request(app).get('/api/v1/articles');
      chai.expect(res).to.have.status([200]);
      chai.expect(res.body).to.be.a('array');
    });

    it('it should show error message on invalid route', async () => {
      const res = await chai.request(app).get('/api/v1/artic');
      chai.expect(res).to.have.status([404]);
    });
  });

  describe('GET ONE ARTICLE BY ID', () => {
    it('it should retrieve one article', async () => {
      const id = testSchema._id;
      const res = await chai.request(app).get('/api/v1/articles/' + id);
      chai.expect(res).to.be.a('object');
      // console.log(res)
      chai.expect(res.body).to.have.property('_id');
      chai.expect(res.body).to.have.property('title');
      chai.expect(res.body).to.have.property('content');
      chai.expect(res.body).to.have.property('image');

      chai.expect(res.body).to.have.property('likes');
      chai.expect(res.body).to.have.property('author');
    });
  });

  describe('CREATE POST', () => {
    it('it should create a post', async () => {
      const res = await chai
        .request(app)
        .post('/api/v1/articles/')
        .set({ Authorization: `Bearer ${token}` })
        .send({
          title: 'updated the title',
          content: 'update lorem ipsum',
        });

      chai.expect(res.status).is.eq(201);
    });
    it('it should not create a post', async () => {
      const res = await chai
        .request(app)
        .post('/api/v1/articl/')
        .set({ Authorization: `Bearer ${token}` })
        .send({
          title: 'updated the title',
          content: 'update lorem ipsum',
        });

      chai.expect(res.status).is.eq(404);
    });
    it('it should not create post without authentication', async () => {
      const res = await chai.request(app).post('/api/v1/articles/').send({
        title: 'updated the title',
        content: 'update lorem ipsum',

        likes: 0,
      });
      chai.expect(res.text).is.eq(`{"message":"please login first"}`);
      chai.expect(res.status).is.eq(401);
    });

    it('it should not post without title', async () => {
      const token = await generateToken({ id: testSchema._id });
      const res = await chai
        .request(app)
        .post('/api/v1/articles/')
        .set({ Authorization: `Bearer ${token}` })
        .send({
          title: '',
          content: 'update lorem ipsum',

          likes: 0,
        });
      chai.expect(res.status).to.be.eq(400);
      chai.expect(res.body).to.have.property('errorMessage');
      chai.expect(res.body.errorMessage).to.be.eq('title is required');
    });

    it('it should not post without content of 10 characters', async () => {
      const token = await generateToken({ id: testSchema._id });
      const res = await chai
        .request(app)
        .post('/api/v1/articles/')
        .set({ Authorization: `Bearer ${token}` })
        .send({
          title: 'create this article',
          content: 'update',

          likes: 0,
        });
      chai.expect(res.status).to.be.eq(400);
      chai
        .expect(res.body.errorMessage)
        .to.be.eq('content must be of min 10 characters');
    });

    it('it should not post without image', async () => {
      const token = await generateToken({ id: testSchema._id });
      const res = await chai
        .request(app)
        .post('/api/v1/articles/')
        .set({ Authorization: `Bearer ${token}` })
        .send({
          title: 'created article',
          content: 'Lorem Ipsum is simply dummy text of the printin',
          image: '',

          likes: 0,
        });

      chai.expect(res.status).to.be.eq(400);
      chai.expect(res.body.errorMessage).to.be.eq('Image is required!!!');
    });
  });

  describe("ARTICLE COMMENTS", () => {
          it("it should test name validation", async() => {
               let commentTest = new commentSchema({
                    name: "",
                    content: "i like this article"
               })
               await commentTest.save()
               const res = await chai.request(app).post("/api/v1/articles/" + testSchema._id + "/addComment")
               .send(commentTest)
               chai.expect(res.status).to.be.eq(400)
               chai.expect(res.body.error).to.be.eq("Name is required!!!")
          })

          it("it should test content validation", async() => {
               let commentTest = new commentSchema({
                    name: "gabin",
                    content: ""
               })
               await commentTest.save()
               const res = await chai.request(app).post("/api/v1/articles/" + testSchema._id + "/addComment")
               .send(commentTest)
               chai.expect(res.status).to.be.eq(400)
               chai.expect(res.body.error).to.be.eq("Content required!!!")
          })
     })

     describe("DELETE COMMENTS", () => {
          it("it should check that there are no comments to delete", async() => {
               let commentTest = new commentSchema({
                    name: "gabin",
                    content: "nice article"
               })
               await commentTest.save()
               const token = await generateToken({id: testSchema._id})
               const res = await chai.request(app).delete("/api/v1/articles/" + testSchema._id + "/deleteComments")
               .send(commentTest)
               .set({"Authorization": `Beare ${token}`})
               chai.expect(res.status).to.be.eq(205)
               chai.expect(res.body.message).to.be.eq("there are no comments")
          })

          
     })
});
