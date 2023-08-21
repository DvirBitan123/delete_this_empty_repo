const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const router = require('./Routes/userRoutes');

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
})


