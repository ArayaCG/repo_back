const City = require ("../models/Cities")

const getCities = async (req, res)=> {
    try{
        let cities = await City.find();
        res.status(200).json(
            cities
        );
    }catch(err){
        res.status(500).json({message: err.message});
    }
}
const getCity = async (req, res)=> {
    try{
        let {id} = req.params;
        let cityFound = await City.findById(id);
       
        res.status(200).json({cityFound})
    }catch(err){
        res.status(200).json({message: err})
    }
}

const addCity = (req, res) =>{  
    try{
        let querys = req.query;
        let newCity = new City(querys)
        newCity.save();
        console.log( querys );
        res.status(201).json({
            "message": "city has been added",
            "client" : newCity
        })
    }catch(err){
        res.status(500).json({message: err})
    }
}

const deleteCity = (req, res) =>{  
    try{
        let {id} = req.query;
        City.deleteOne({_id: id});
       
        res.status(201).json({
            "message": "city has been deleted",
        })
    }catch(err){
        res.status(500).json({message: err})
    }
}
const updateCity = async (req, res) =>{
    try{
        let {id} = req.params;
        let cityFound = await City.findByIdAndUpdate(id, {name: "Nombre nuevo" })
       
        res.status(201).json({
            "message": "city has been updated",
        })
    }catch(err){
        res.status(500).json({message: err})
    }
}

module.exports = {
    getCities, 
    getCity,
    addCity,
    deleteCity,
    updateCity
}