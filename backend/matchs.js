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
            type: String,
            unique: true,
        }
    },
    { timestamps: true },
)
Match = model('match', MatchSchema)

dataMatch = require('./match.json')
module.exports = {
    addMatch: addMatch = async ()=>{
        await Match.deleteMany({});
        await Match.insertMany(dataMatch.Match);
    },

    findMatch : findMatch = async (idMatch)=>{
        return await Match.findOne({id: idMatch})
    },
    find : find = async ()=>{
        return await Match.find()
    }
}