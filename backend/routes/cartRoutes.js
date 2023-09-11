import express from 'express';
import { deleteCartItem, getCartItem, postCartItem } from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';



const router = express.Router();
router.post('/', protect, postCartItem)
router.get('/', protect, getCartItem);
router.delete('/:id', protect, deleteCartItem);

export default router;
