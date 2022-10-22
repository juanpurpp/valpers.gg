const { mongoose, Schema, model } = require('mongoose');
const server = '127.0.0.1:27017';
const database = 'testdb';

const dbmatchs = require('./matchs.js')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)
        console.log('MongoDB connected!!');
        testMatchFunction();
        console.log('5');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

connectDB();

var testMatchFunction = function(){
    console.log('1'),
    data=[{
        'id': 1, 
        'maps': 'Split', 
        'ready': false,
        'team1': [
            {
                'jugador':[
                    {
                        'name': 'Juanpurpp',
                        'agent': 'Reyna'
                    },
                    {
                        'name': 'NicoSad',
                        'agent': 'Neon'
                    }
                ]
            }
        ],
        'team2': [
            {
                'jugador':[
                    {
                        'name': 'Happy8',
                        'agent': 'Chamber'
                    },
                    {
                        'name': 'Franso',
                        'agent': 'Fade'
                    }
                ]
            }
        ],
    }]
    console.log('2'),
    dbmatchs.add(data)
    
    console.log('3')
    mongoose.disconnect()
    
    console.log('4')
}



