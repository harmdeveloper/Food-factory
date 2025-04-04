// controllers/contactController.js
import contactModel from "../models/contactmodel.js";

const createContact = async (req, res) => {
    const { firstName, lastName, email, city, country, phone, subject, message } = req.body;
    try {
        const newContact = new contactModel({
            firstName,
            lastName,
            email,
            city,
            country,
            phone,
            subject,
            message,
        });
        await newContact.save();
        res.json({ success: true, message: 'Contact saved successfully', contact: newContact });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error saving contact' });
    }
};

// Fetch all contacts from the database
const getContacts = async (req, res) => {
    try {
        const contacts = await contactModel.find({}, 'firstName message');
        console.log('Contacts fetched:', contacts);  // Add this line to log contacts
        res.json({ success: true, contacts }); // Send contacts in the response
    } catch (error) {
        console.log('Error in getContacts controller:', error);  // Log detailed error
        res.status(500).json({ success: false, message: 'Error fetching contacts' });
    }
};

export { createContact, getContacts };

