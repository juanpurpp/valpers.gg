var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
var mongoose = require('mongoose');

var dbagents = require('./agents.js');
var dbmaps = require('./maps.js');
var dbmatchs = require('./matchs.js');
var dbranks = require('./ranks.js');

var matchsRouter = require('./routes/matchs');
var mapsRouter = require('./routes/maps');
var agentsRouter = require('./routes/agents');
var ranksRouter = require('./routes/ranks');

var app = express();


const server = '127.0.0.1:27017';
const database = 'valpers';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)
        console.log('MongoDB connected!!');
        console.log('Adding resources')
        await dbagents.addAgent();
        await dbmaps.addMap();
        await dbranks.addRank();
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};
connectDB();

=======

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

>>>>>>> origin/backend
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
app.use('/matchs', matchsRouter);
app.use('/maps', mapsRouter);
app.use('/agents', agentsRouter);
app.use('/ranks', ranksRouter);
=======

app.use('/', indexRouter);
app.use('/users', usersRouter);
>>>>>>> origin/backend

module.exports = app;
