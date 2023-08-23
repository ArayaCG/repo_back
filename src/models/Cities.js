const {Schema, model} = require("mongoose");

const schemaCity = new Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    details: {
        type: String,
    }
});

const City = model("City", schemaCity);

module.exports = City;