import express from 'express';

import loginController from '../controllers/auth/loginCntroller.js';
import registerController from '../controllers/auth/registerController.js';

const router = express.Router();

// TODO change to POST, set GET for test purposes
router.get('/login', loginController);
router.get('/register', registerController);

export default router;
