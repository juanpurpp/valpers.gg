const { mongoose, Schema, model, connect } = require('mongoose');
 

const server = '127.0.0.1:27017';
const database = 'ranks';

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

const addRanks = async ()=>{
    await Ranks.deleteMany({});
    await Ranks.insertMany(dataRank.Ranks);
}


dataRank = require('./rank.json')

module.exports = {
    addRank : addRank = async ()=>{
        await Ranks.deleteMany({});
        await Ranks.insertMany(dataRank.Ranks);
    },
    find : find = async ()=>{
        return await Ranks.find({})
    },
    findRank : findRank = async (nombre)=>{
        return await Ranks.findOne({name: nombre}).exec()
    }
}