const { mongoose, Schema, model } = require('mongoose');
 
//Se hace el esquema de la base de datos y los atributos que tiene
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

//Se ingresa el archivo que contiene los datos que se guardaran 

//Se exportan las funciones que se ocuparan en el backend
module.exports = {
    addMap : addAll= async (maps)=>{
        await Maps.deleteMany({});
        await Maps.insertMany(maps);
    },
    find : find= async ()=>{
        return await Maps.find({})
    },
    findMap : findMap = async(nombre)=>{
        return await Maps.findOne({name: nombre})
    }
}