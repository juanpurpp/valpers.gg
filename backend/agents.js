const { mongoose, Schema, model } = require('mongoose');
 


const AgentSchema = new Schema(
    {
        ID:{
            type: Number,
            unique: true,
        },
        name:{
            type: String,
            unique: true,
        },
        category:{
            type: String,
        },
    },
    { timestamps: true },
)

Agents = model('agents', AgentSchema)

dataAgent = require('./agents.json')

const addAgents = async ()=>{
    await Agents.deleteMany({});
    await Agents.insertMany(dataRank.Ranks);
}
module.exports = {
    addAgent : addAgent = async ()=>{
        await Agents.deleteMany({});
        await Agents.insertMany(dataAgent.Agents);
    },

    find : find = async ()=>{
        return await Agents.find({})
    },

    findAgent : findAgent = async (nombre)=>{
        return await Agents.findOne({name: nombre}).exec();
    }
}