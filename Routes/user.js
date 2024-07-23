import express from 'express';
import { getAllUsers, register, login, getMyProfile } from '../controllers/user.js';
import { isAuthenticated } from '../MIddlewares/Auth.js';

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

router.post("/login", login);

// To make the route methods in one line ...
router.route("/me").get(isAuthenticated , getMyProfile);

export default router;