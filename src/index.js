const express = require('express');
const apiRoute = require('./routes/routes');


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/api', apiRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
