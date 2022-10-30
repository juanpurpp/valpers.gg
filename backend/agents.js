const { mongoose, Schema, model } = require('mongoose');
 

//Se hace el esquema de la base de datos y los atributos que tiene
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

//Se ingresa el archivo que contiene los datos que se guardaran 
dataAgent = require('./agents.json')

//Se exportan las funciones que se ocuparan en el backend
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