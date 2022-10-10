const { mongoose, Schema, model } = require('mongoose');
 

const server = '127.0.0.1:27017';
const database = 'ranks';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)

        console.log('MongoDB connected!!');
        console.log('Add Ranks')
        await addMap();
        mongoose.disconnect()
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
} ;

const RankSchema = new Schema(
    {
        ID:{
            type: String,
            unique: true,
        },
        name:{
            type: String,
            unique: true,
        },
        img:{
            type: String,
        },
    },
    { timestamps: true },
)

Ranks = model('ranks', RankSchema)

dataRank = require('./rank.json')

const addMap = async ()=>{
    await Ranks.deleteMany({});
    await Ranks.insertMany(dataRank.Ranks);
}
connectDB();