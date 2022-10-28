const { mongoose, Schema, model } = require('mongoose');
 

const MapSchema = new Schema(
    {
        ID:{
            type: Number,
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

const addMaps = async ()=>{
    await Maps.deleteMany({});
    await Maps.insertMany(dataRank.Ranks);
}

dataMap = require('./maps.json')
module.exports = {
    addMap : addMap = async ()=>{
        await Maps.deleteMany({});
        await Maps.insertMany(dataMap.Maps);
    },
    find : find= async ()=>{
        return await Maps.find({})
    },
    findMap : findMap = async(nombre)=>{
        return await Maps.findOne({name: nombre})
    }
}