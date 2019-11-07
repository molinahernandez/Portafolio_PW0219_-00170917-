const Mongoose = require("mongoose");

let dataBase = "LaboJueves";
let host = "localHost";
let port = "27017";
let uri = `mongodb://${host}:${port}/${dataBase}`

const connect = () => {
    Mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then( ()=>{
        console.log( `Connection to ${database} successfully`);

    })
    .catch( ()=>{
        console.log("Error :v")
    });

    Mongoose.Promise = global.Promise;

}
module.exports = {connect};