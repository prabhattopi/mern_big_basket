import express from 'express';
import { getItem } from '../controllers/itemController.js';


const router = express.Router();

router.get('/', getItem);
export default router;
