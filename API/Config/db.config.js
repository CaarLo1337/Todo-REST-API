require('dotenv').config();

const mongoose = require('mongoose');

mongoose
    .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false}
    )
    .then(() => {
        console.log(`\n*  Database successfully connected\n`);
    })
    .catch((err) => {
        console.log(err) 
    });