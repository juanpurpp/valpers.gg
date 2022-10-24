const {mongoose} = require('mongoose');
const server = '127.0.0.1:27017';
const database = 'testdb';
/**
 * 
 * Testdb.js es un archivo hecho exclusivamente para probar
 * las funciones creadas para manejar la base de datos.
 * 
 * No tiene ninguna insidencia en como funciona el proyecto principal
 */
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

var testAdd = async () =>{
    console.log('testing maxid');
    let newid = (await dbmatchs.maxId()).id +1
    console.log('nueva id será ' + newid);
    data={
        "id": newid,
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
    }
    console.log('testing add');

    dbmatchs.add(data)
}
testAdd()
var testDel = async function(){
    let num = 26
    console.log('borrando el '+num)
    await dbmatchs.del(num)
}
var testUpdate = async function(){
    let num = 22
    data={
        "id": num,
        "map": "mapafalso", 
        "ready": true,
        "team1": [
            {
                "jugador":[
                    {
                        "name": "Antijuanúrpp",
                        "agent": "Reyna",
                        "rank": "Cripton 2"
                    },
                    {
                        "name": "NicoHappy",
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
                        "name": "Sad8",
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
    }
    console.log('actualizando el '+ num);
    await dbmatchs.update(num,data)
}
sample =
    {
        "id": 5,
        "map": "Haven", 
        "ready": false,
        "team1":
        [
            {
                "name": "Player1",
                "agent": "Reyna",
                "rank": "Plata 1"
            },
            {
                "name": "shalalala",
                "agent": "Omen",
                "rank": "Plata 2"
            },
            {
                "name": "AntiJuanpurpp",
                "agent": "Reyna",
                "rank": "Hierro 1"
            },
            {
                "name": "dios",
                "agent": "Reyna",
                "rank": "Inmortal 1"
            },
            {
                "name": "nose",
                "agent": "Reyna",
                "rank": "Plata 2"
            } 
        ],
        "team2":
        [
            {
                "name": "ultradios",
                "agent": "Reyna",
                "rank": "Plata 1"
            },
            {
                "name": "lolaso",
                "agent": "Omen",
                "rank": "Plata 2"
            },
            {
                "name": "rosel",
                "agent": "Reyna",
                "rank": "Ascendente 1"
            },
            {
                "name": "alfarazaso",
                "agent": "Reyna",
                "rank": "Hierro 2"
            },
            {
                "name": "kenznit",
                "agent": "Reyna",
                "rank": "Oro 2"
            }     
        ]
    }