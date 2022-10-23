const {mongoose} = require('mongoose');
const server = '127.0.0.1:27017';
const database = 'testdb';

const dbmatchs = require('./matchs.js')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)
        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

connectDB();

var testMatchFunctions = function(){
    console.log('testing maxid');
    let newid = 0;
    dbmatchs.maxId().then(result =>{
        console.log('result es '+result)
        newid = result.matchid +1
        console.log('pasa xd '+ newid)
    console.log('result newid cargado como '+ newid);
    data=[{
        "matchid": newid,
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
    console.log('testing add');
    
    dbmatchs.add(data)
    })
}
testMatchFunctions();
