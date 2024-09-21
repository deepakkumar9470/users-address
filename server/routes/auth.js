import express from 'express';
const router = express.Router()
import {userCreation } from '../controllers/userController.js';

// @ /api/user/resister 
router.post('/create',userCreation);



export default router