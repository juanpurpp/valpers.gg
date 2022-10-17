const { mongoose, Schema, model } = require('mongoose');
 

const server = '127.0.0.1:27017';
const database = 'match';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)

        console.log('MongoDB connected!!');
        console.log('Add Match')
        await addMatch();
        await findMatch("001");
        mongoose.disconnect()
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
} ;

const MatchSchema = new Schema(
    {
        map:{
            type: String
        },
        team1:{
            type: Array,
            jugador:{
                type: String,
                name:{
                    type: String
                },
                agent:{
                    type: String
                },
                rank:{
                    type: String
                }
            }
        },
        team2:{
            type: Array,
            jugador:{
                type: String,
                name:{
                    type: String
                },
                agent:{
                    type: String
                },
                rank:{
                    type: String
                }
            }
        },
        id:{
            type: String,
            unique: true,
        }
    },
    { timestamps: true },
)

Match = model('match', MatchSchema)

dataMatch = require('./match.json')

const addMatch = async ()=>{
    await Match.deleteMany({});
    await Match.insertMany(dataMatch.Match);
}

const findMatch = async (idMatch)=>{
    match = await Match.findOne({id: idMatch})
    console.log(match)
}
connectDB();