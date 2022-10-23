const { mongoose, Schema, model } = require('mongoose');
 
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
            type: Number,
            unique: true
        },
        ready:{
            type: Boolean
        }
    },
    { timestamps: true },
)
Match = model('match', MatchSchema)

dataMatch = require('./match.json')
module.exports = {
    findOne : findOne = async (idMatch)=>{
        return await Match.findOne({id: idMatch})
    },
    find : find = async ()=>{
        return await Match.find()
    },
    add : add = async(data)=>{
        return await Match.insertMany(data)
    },
    del : del = async(idMatch)=>{
        return await Match.findOneAndDelete({id: idMatch})
    },
    update : update = async(idMatch, data)=>{
        return await Match.findOneAndUpdate({id: idMatch},{Match: data})
    },
    maxId : maxId = async()=>{
        await Match.findOne().sort('-id').exec(function(err, Match){
            return Match.id 
        });
    }
}