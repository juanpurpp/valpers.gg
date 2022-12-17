var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors')
var dbagents = require('./agents.js');
var dbmaps = require('./maps.js');
var dbmatchs = require('./matchs.js');
var dbranks = require('./ranks.js');
var matchsRouter = require('./routes/matchs');
var mapsRouter = require('./routes/maps');
var agentsRouter = require('./routes/agents');
var ranksRouter = require('./routes/ranks');
var usersRouter = require('./routes/users')

var app = express();

const config = require('./config.js');

const connectDB = async () => {
    try {
        await mongoose.connect(config.DB_HOST);
        console.log('MongoDB connected!!');
        console.log('Adding resources')
        await dbagents.addAgent();
        //await dbmaps.edit();
        await dbranks.addRank();
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
connectDB();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/matchs', matchsRouter);
app.use('/maps', mapsRouter);
app.use('/agents', agentsRouter);
app.use('/ranks', ranksRouter);
app.use('/users', usersRouter)

module.exports = app;
