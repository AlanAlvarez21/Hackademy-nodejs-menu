const { Router } = require('express'); // Se con figura el router que se importara
const router = Router(); // Guarda la información en un objecto llamado router
const { unlink } = require('fs-extra');
const Image = require('../models/Image'); // Importa el modelo de imagenes 
const path = require('path');

router.get('/', async (req, res) => {
    const images = await Image.find();
    console.log(images);             // Imprime el objeto con el arreglo de la base de datos 
    res.render('index', { images }); // renderiza index.js en la raiz del server 
});


router.get('/upload/', (req, res) => { // Ruta ver imagenes imagenes 
    res.render('upload');
});

router.get('/image/:id', async (req, res) => { // Ruta ver una determinada imagen 
    const { id } = req.params;  // Se obtiene el id de la imagen 
    const image = await Image.findById(id); // Busca el archivo correspondiente al id 
    console.log(image);
    res.render('profile', { image });
});

router.post('/upload/', async (req, res) => { // Ruta para subir imagenes 
    //console.log(req.file); Imprime en consola el Json con los datos de a imagen subida 
    const image = new Image();
    image.title = req.body.title; // Recibe el titulo de la imagen
    image.description = req.body.description;  // Recibe la descripcion de la imagen
    image.filename = req.file.filename; // Recibe nombre de la imagen
    image.path = '/img/uploads/' + req.file.filename; // Recibe ruta de la imagen
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    await image.save(); // Guarda objeto recien creado    
    console.log(image); //Imprime objeto imagen creado
    res.redirect('/');
});

router.get('/image/:id/delete', async (req, res) => { // Ruta para eliminar imagenes 
    const { id } = req.params; // Se obtiene el id de la imagen
    const image =  await Image.findByIdAndDelete(id); // Busca el id y elimina archivo relacionado 
    await unlink(path.resolve('./src/public' + image.path)); // Elimina la imagen en base a su ruta 
    res.redirect('/');
});

module.exports = router; // Exporta el objeto router 


