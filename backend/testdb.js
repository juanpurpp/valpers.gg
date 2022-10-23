const {mongoose} = require('mongoose');
const server = '127.0.0.1:27017';
const database = 'testdb';

const dbmatchs = require('./matchs.js')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)
        console.log('MongoDB connected!!');
        console.log('5');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

connectDB();
var testMatchFunction = function(){
    console.log("1"),
    data=[{
        "id": 3, 
        "map": "Split", 
        "ready": false,
        "team1": [
            {
                "jugador":[
                    {
                        "name": "Juanpurpp",
                        "agent": "Reyna",
                        "rank": "Plata 1"
                    },
                    {
                        "name": "NicoSad",
                        "agent": "Neon",
                        "rank": "Plata 1"
                    }
                ]
            }
        ],
        "team2": [
            {
                "jugador":[
                    {
                        "name": "Happy8",
                        "agent": "Chamber",
                        "rank": "Plata 1"
                    },
                    {
                        "name": "Franso",
                        "agent": "Fade",
                        "rank": "Plata 1"
                    }
                ]
            }
        ],
    }]
    console.log('2'),
    dbmatchs.add(data)  
    console.log('3')
    console.log('4')
}

testMatchFunction();
