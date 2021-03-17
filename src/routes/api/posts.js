const { Router, response } = require('express'); // Se con figura el router que se importara
const router = Router(); // Guarda la información en un objecto llamado router

const Image = require('../../models/Image'); // Importa el modelo de imagenes 



router.get('/', async (req, res) => {
    try {
    const images = await Image.find();
    // Imprime el objeto con el arreglo de la base de datos 
    const response = (res.json({images}));
    console.log(response);
    } catch (err) {
        res.json({ message: err })
    }  
});


module.exports = router; // Exporta el objeto router 


