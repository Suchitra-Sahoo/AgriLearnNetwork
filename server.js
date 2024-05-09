const express = require('express');
const app = express();
const port = process.env.PORT || 5500;

// Middleware to parse JSON and urlencoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for handling form submission

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})
app.post('/form', (req, res) => {
    try {
        // Log the received form data
        console.log('Received form data:', req.body);

        // Send back the received data as response
        res.status(200).json({ message: 'Form data received successfully', data: req.body });
    } catch (error) {
        // Handle any errors
        console.error('Error handling form data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
