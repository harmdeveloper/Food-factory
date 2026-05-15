// routes/contactRoutes.js
import express from 'express';
import { createContact, getContacts } from '../controllers/contactController.js';

const contactRouter = express.Router();

contactRouter.post('/contact', createContact);

// Route to fetch all contacts
contactRouter.get('/contacts', getContacts);

export default contactRouter;
