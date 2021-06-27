const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000
require('./API/Config/db.config');
const cors = require('cors');

//###############################################

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

//###############################################

const routes = require('./API/Routes/todo');

routes(app);

//###############################################

app.listen(port, () => {
    console.log(`server is running...`);
    console.log(`http://localhost:${port}`);
})