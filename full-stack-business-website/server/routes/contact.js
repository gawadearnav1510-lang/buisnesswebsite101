import express from 'express';
import { submitContact } from '../controllers/contactController.js';
import { body } from 'express-validator';

const router = express.Router();

router.post('/', [
  body('name').notEmpty().trim(),
  body('email').isEmail(),
  body('subject').notEmpty(),
  body('message').notEmpty()
], submitContact);

export default router;