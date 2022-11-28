const { mongoose, Schema, model } = require('mongoose');

var bcrypt = require("bcrypt")

const UsersSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is mandatory'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is mandatory'],
    },
    roles: {
      type: [String],
      required: [true, 'Roles are mandatory'],
    },
    token: {
      type: String,
      required: [false, 'Session token is not mandatory'],
      default: '' 
    },
  },
  { timestamps: true },
);

UsersSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UsersSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

User = model('user', UsersSchema)

//dataMatch = require('./match.json')

//Se exportan las funciones que se ocuparan en el backend
module.exports = {
    findOne : findOne = async (username)=>{
        return await User.findOne({name: username})
    },
    find : find = async ()=>{
        return await User.find()
    },
    add : add = async(data)=>{

        if(await User.findOne({ name: data.name })) {
          return 409;
        }
        else await User.create(data)
    },
    del : del = async(username)=>{
        return await User.findOneAndDelete({name: username})
    },
    update : update = async(username, data)=>{
        return await User.updateOne({name: username},data)
    }
}