const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/bfhl', (req, res) => {
    const data = req.body.data;


    const oddNumbers = data.filter(item => !isNaN(item) && item % 2 !== 0);
    const evenNumbers = data.filter(item => !isNaN(item) && item % 2 === 0);
    const alphabets = data.filter(item => isNaN(item)).map(item => item.toUpperCase());

  
    const response = {
        "is_success": true,
        "user_id": "john_doe_17091999",
        "email": "john@xyz.com",
        "roll_number": "ABCD123",
        "odd_numbers": oddNumbers,
        "even_numbers": evenNumbers,
        "alphabets": alphabets
    };

    res.json(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
