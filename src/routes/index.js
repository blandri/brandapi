import express from 'express';
import welcomeRoutes from './api/welcomeRoutes';
import articleRoutes from './api/articleRoutes';
import queriesRoutes from './api/queriesRoutes';
import userRoutes from './api/userRoutes';
import commentRoutes from './api/commentRoutes';
import likeRoutes from '../routes/api/likeRoutes';

const routes = express.Router();

routes.use('/', welcomeRoutes);
routes.use('/articles', articleRoutes);
routes.use('/queries', queriesRoutes);
routes.use('/user', userRoutes);
routes.use('/comment', commentRoutes);
routes.use('like', likeRoutes);

export default routes;
