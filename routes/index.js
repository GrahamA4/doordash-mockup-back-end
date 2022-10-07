import { Router } from 'express';
import usersRoutes from './userRoute.js';

//variable on which to perform router methods
const router = Router();

//send message to homepage of api url
router.get('/', (req, res) => res.send('This is the api root!'));

//use routes
router.use('/', usersRoutes);

export default router;
