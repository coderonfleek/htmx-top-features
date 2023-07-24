// Import the necessary libraries
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require("cors");


// Load environment variables from .env file
dotenv.config();

// Create the Express app
const app = express();

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Setup CORs
app.use(cors());




// Create an index route which returns a welcome message
app.get('/', (req, res) => {
  res.send('<h2 id="fade-me-in" class="text-warning">Welcome to our Backend!</h2>');
});

// Create a "message" route which returns a JSON response
app.post('/message', async (req, res) => {


    try {
          res.json({
            message : "This is a POST request Response",
            role: "POST Demo"
          });
    } catch (error) {
        console.log(JSON.stringify(error));
    }

  



  
});

// The port the app will listen on
const PORT = process.env.PORT || 1330;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
