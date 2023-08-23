const verifyDataCity = (req, res, next)=>{
    let {name, country, img} = req.query;
   
    if(name == ""){
        return res.status(400).json({message: "Invalid name"})
    }
    if(country == ""){
        return res.status(400).json({message: "Invalid country"})
    }
    if(img == ""){
        return res.status(400).json({message: "Invalid img"})
    }
    next();
}
module.exports = {
    verifyDataCity
}