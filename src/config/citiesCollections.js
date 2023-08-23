require("./db")
const City = require("../models/Cities")
import Bsas from '../../assets/imgPlaces/bsas.jpg'
import Mdz from '../../assets/imgPlaces/mdz.jpg'
import Tokio from '../../assets/imgPlaces/tokio.jpg'
import Iwate from '../../assets/imgPlaces/iwate.jpg'
import Venice from '../../assets/imgPlaces/venecia.jpg'
import Tuskany from '../../assets/imgPlaces/Toscana.jpg'
import Oaxaca from '../../assets/imgPlaces/oaxaca.jpg'
import Sonora from '../../assets/imgPlaces/Sonora.jpg'
import Bogota from '../../assets/imgPlaces/Bogota.jpeg'
import machupichu from '../../assets/imgPlaces/machupichu.jpg'
import oregon from '../../assets/imgPlaces/oregon.jpg'
import viñamar from '../../assets/imgPlaces/viñamar.jpg'

const cities = [
    {name: 'Buenos Aires',place: 'Argentina',img: Bsas},
    {name: 'Mendoza',place: 'Argentina',img: Mdz},
    {name: 'Tokio',place: 'Japan',img: Tokio},
    {name: 'Iwate',place: 'Japan',img: Iwate},
    {name: 'Venice',place: 'Italy',img: Venice},
    {name: 'Tuskany',place: 'Italy',img: Tuskany},
    {name: 'Oaxaca',place: 'Mexico',img: Oaxaca},
    {name: 'Sonora',place: 'Mexico',img: Sonora},
    {name: 'Bogota',place: 'Colobia',img: Bogota},
    {name: 'Machu Pichu',place: 'Perú',img: machupichu},
    {name: 'Oregon',place: 'U.S.A.',img: oregon},
    {name: 'Viña del Mar',place: 'Chile',img: viñamar},

]

City.insertMany(cities);