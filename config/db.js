const uri = "mongodb+srv://capitanrdc:YVq9SwXenbCsvhg@cluster0.guxqd.mongodb.net/contactDB?retryWrites=true&w=majority";

const mongoose = require('mongoose');

module.exports = function(){
    mongoose.connect(uri);
    let mongoDB = mongoose.connection;

    mongoDB.on('err', console.error.bind(console, "Error please try again"));
    mongoDB.once('open', ()=>{
        console.log("====>Mongo Ready to use");
    })
    return mongoDB;
}