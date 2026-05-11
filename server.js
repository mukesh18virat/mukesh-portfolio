const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Form ka data padhne ke liye
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sare static files WEB folder se serve karo
app.use(express.static(__dirname));

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// CV download route
app.get('/download-cv', (req, res) => {
    const filePath = path.join(__dirname, 'Mukesh-CV.pdf');
    res.download(filePath, 'Mukesh-CV.pdf');
});

// Contact form ka backend
app.post('/contact', (req, res) => {
    const { name, email, mobile, subject, message } = req.body;
    
    console.log('=== NEW MESSAGE ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Mobile:', mobile);
    console.log('Subject:', subject);
    console.log('Message:', message);
    console.log('===================');
    
    // User ko success page bhej do
    res.send(`
        <h1 style="font-family: Poppins; text-align: center; margin-top: 50px; color: #64ffda; background: #0a192f; padding: 20px;">
            Thank You ${name}! <br> 
            Message Received Successfully ✅
        </h1>
        <div style="text-align: center; margin-top: 20px;">
            <a href="/" style="color: #64ffda; font-family: Poppins;">Go Back to Portfolio</a>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});