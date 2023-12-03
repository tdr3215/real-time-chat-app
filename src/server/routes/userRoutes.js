import express from 'express';
const router = express.Router();
import {
  registerUser,
  authenticateUser,
} from '../controllers/userController.js';
// * ROUTES
router.route('/').post(registerUser);
router.route('/login').post(authenticateUser);
export { router as userRoutes };
