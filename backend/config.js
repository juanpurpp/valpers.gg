const path = require('path');
const dotenv= require('dotenv').config({path: '../.env'});

module.exports={
    DB_HOST: process.env.DB_HOST
}