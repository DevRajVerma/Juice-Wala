const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
// const mongoose = require('mongoose');

// Connect to MongoDB
// mongoose.connect('mongodb://localhost/juice-shop', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((error) => {
//         console.error('Failed to connect to MongoDB:', error);
//     });

// Configure Nodemailer with your email provider's SMTP settings
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'drverma2704@gmail.com',
        pass: 'loveofindia'
    }
});

// Configure Express to parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;


    // Validate form data
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please fill in all fields' });
    }

    // Create email message
    const mailOptions = {
        from: email,
        to: 'your-email@example.com',
        subject: 'New Message from Juice Shop Website',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ message: 'Email sent successfully' });
        }
    });
});



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
