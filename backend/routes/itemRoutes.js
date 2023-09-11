import express from 'express';
import { getItem, searchItem } from '../controllers/itemController.js';


const router = express.Router();

router.get('/', getItem);
router.get('/search', searchItem);
export default router;
