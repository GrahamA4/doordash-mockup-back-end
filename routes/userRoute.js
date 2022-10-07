import { Router } from 'express';
import * as controllers from '../controllers/auth.js';

const router = Router();

router.post('/sign-up', controllers.signUp);
router.post('/sign-in', controllers.signIn);
router.get('/verify', controllers.verify);
router.get('/get-user/:email', controllers.getUser);

export default router;
