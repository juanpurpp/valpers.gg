const { mongoose, Schema, model } = require('mongoose');
 
//Se hace el esquema de la base de datos y los atributos que tiene
const MatchSchema = new Schema(
    {
        map:{
            type: mongoose.Schema.Types.Mixed
        },
        meta:{
            type: Object,
            avgRankTeam1: {
                type:  String
            },
            avgRankTeam2: {
                type:  String
            },
        },
        team1:{
            type: Array,
            name:{
                type: String
            },
            agent:{
                type: String
            },
            rank:{
                type: String
            }
        },
        team2:{
            type: Array,
            name:{
                type: String
            },
            agent:{
                type: String
            },
            rank:{
                type: String
            }
        },
        id:{
            type: Number,
            unique: true
        },
        ready:{
            type: Boolean
        }
        ,
        invite:{
            type: String
        }
    },
    { timestamps: true },
)
Match = model('match', MatchSchema)

//dataMatch = require('./match.json')

//Se exportan las funciones que se ocuparan en el backend
module.exports = {
    findOne : findOne = async (idMatch)=>{
        return await Match.findOne({id: idMatch})
    },
    find : find = async ()=>{
        return await Match.find()
    },
    add : add = async(data)=>{
        return await Match.create(data)
    },
    del : del = async(idMatch)=>{
        return await Match.findOneAndDelete({id: idMatch})
    },
    update : update = async(idMatch, data)=>{
        return await Match.updateOne({id: idMatch},data)
    },
    maxId : maxId = async() => {
        return await Match.findOne().sort('-id');
    }
}
