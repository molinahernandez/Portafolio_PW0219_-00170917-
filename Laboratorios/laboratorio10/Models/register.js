const Mongoose = require("mongoose");

const RegistroSchema = Mongoose.Schema({
    carnet:{
        type: String,
        require: true 
    },
    schedule: String,
    isLate: Boolean

});

module.exports = Mongoose.model("Registro",RegistroSchema);