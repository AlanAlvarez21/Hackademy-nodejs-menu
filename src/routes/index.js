const { Router } = require('express'); // Se con figura el router que se importara
const router = Router(); // Guarda la información en un objecto llamado router

const Image = require('../models/Image');


router.get('/', async (req, res) => {
    const images = await Image.find();
});


router.get('/upload', (req, res) => { // Ruta ver imagenes imagenes 
    res.render('upload');
});

router.get('/image/:id', (req, res) => { // Ruta ver una determinada imagen 
    res.send('Profile Image');
});

router.post('/upload', async (req, res) => { // Ruta para subir imagenes 
    //console.log(req.file); Imprime en consola el Json con los datos de a imagen subida 
    const image = new Image();
    image.title = req.body.title; // Recibe el titulo de la imagen
    image.description = req.body.description;  // Recibe la descripcion de la imagen
    image.filename = req.file.filename; // Recibe nombre de la imagen
    image.path = '/img/uploads' + req.file.filename; // Recibe ruta de la imagen
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    await image.save(); // Guarda objeto recien creado    
    console.log(image); //Imprime objeto imagen creado
    res.redirect('/');
});

router.get('/image/:id/delete', (req, res) => { // Ruta para eliminar imagenes 
    res.send('Image deleted');
});




module.exports = router; // Exporta el objeto router 


