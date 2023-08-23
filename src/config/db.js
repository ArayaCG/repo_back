const mongoose = require("mongoose");

const URL = "mongodb+srv://Gabriel:HQK2Mt8WwUhc7ku5@prueba.rfapqx0.mongodb.net/?retryWrites=true&w=majority";

const conectDB =  ()=>{
    mongoose.connect(URL)
    .then(()=>{
        console.log( "Connect success to database" )
    })
    .catch(()=>{
        console.log("Error connecting to database" )
    })
}

conectDB();