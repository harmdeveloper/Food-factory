// routes/contactRoutes.js
import express from 'express';
import { createContact, getContacts } from '../controllers/contactController.js';

const contactRouter = express.Router();

contactRouter.post('/', createContact);

// Route to fetch all contacts
contactRouter.get('/', getContacts);

export default contactRouter;
