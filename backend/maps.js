const { mongoose, Schema, model } = require('mongoose');
 

const server = '127.0.0.1:27017';
const database = 'maps';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)

        console.log('MongoDB connected!!');
        console.log('Add Maps')
        await addMap();
        mongoose.disconnect()
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
} ;

const MapSchema = new Schema(
    {
        ID:{
            type: String,
            unique: true,
        },
        name:{
            type: String,
            unique: true,
        },
    },
    { timestamps: true },
)

Maps = model('maps', MapSchema)

dataMap = require('./maps.json')

const addMap = async ()=>{
    await Maps.deleteMany({});
    await Maps.insertMany(dataMap.Maps);
}
connectDB();