const { mongoose, Schema, model } = require('mongoose');
 

const server = '127.0.0.1:27017';
const database = 'agents';


const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)
        console.log('MongoDB connected!!');
        console.log('Add Agents')
        await addAgent();
        //await findAgent(agentName);
        mongoose.disconnect()
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
} ;
connectDB();
const AgentSchema = new Schema(
    {
        ID:{
            type: String,
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

const addAgent = async ()=>{
    await Agents.deleteMany({});
    await Agents.insertMany(dataAgent.Agents);
}

const findAgents = async ()=>{
    agents = await Agents.find({})
    console.log(agents)
}

const findAgent = async (nombre)=>{
    agent = await Agents.findOne({name: nombre}).exec();
    console.log(agent)
}



