const { mongoose, Schema, model, connect } = require('mongoose');
 

const server = '127.0.0.1:27017';
const database = 'ranks';

//Se hace el esquema de la base de datos y los atributos que tiene
const RankSchema = new Schema(
    {
        ID:{
            type: Number,
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

//Se ingresa el archivo que contiene los datos que se guardaran 
dataRank = require('./rank.json')

//Se exportan las funciones que se ocuparan en el backend
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