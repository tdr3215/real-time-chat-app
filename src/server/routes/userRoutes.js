import express from 'express';
const router = express.Router();
import { registerUser } from '../controllers/userController.js';
// * ROUTES
router.route('/').post(registerUser);
// router.route('/login').get(authenticateUser);
export { router as userRoutes };
