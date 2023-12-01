import express from 'express';
const router = express.Router();
import { registerUser } from '../controllers/userController.js';
// * ROUTES
router.route('/').post(registerUser);
export { router as userRoutes };
