const express = require("express");
const router = express.Router();
const {getCities, getCity, addCity, deleteCity, updateCity} = require("../controllers/citiesController");
const { verifyDataCity } = require("../middlewares/verification");

router.get("/cities", getCities);
router.get("/cities/:id", getCity);
router.post("/cities", verifyDataCity ,addCity);
router.delete("/cities" ,deleteCity);
router.put("/cities/:id" ,updateCity);

module.exports = router;