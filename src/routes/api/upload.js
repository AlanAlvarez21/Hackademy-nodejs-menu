const { Router, response } = require('express'); // Se con figura el router que se importara
const router = Router(); // Guarda la información en un objecto llamado router
const { unlink } = require('fs-extra');
const Image = require('../../../models/Image'); // Importa el modelo de imagenes 
const path = require('path');
const cloudinary = require('cloudinary');
const { CLOUD_NAME, API_KEY, API_SECRET } = require('../../config');


//Se configuran las Keys para conectar a cloudinary con variables de entorno 
cloudinary.config({
    cloud_name: 'dssrbmpy2',
    api_key: '621849932743623',
    api_secret: 'k-hVyH11sYE1mXhVab5TWp3D2cA'
});

router.get('/', async (req, res) => {
    try {
    const images = await Image.find();
    console.log(images);             // Imprime el objeto con el arreglo de la base de datos 
    res.render('index', { images }); // renderiza index.js en la raiz del server 
    } catch (err) {
        res.json({ message: err })
    }  
});


router.get('/upload/', async (req, res) => { // Ruta ver imagenes imagenes 
    try {
    const images = await Image.find();
    console.log(images);             // Imprime el objeto con el arreglo de la base de datos 
    res.render('upload', { images });
    } catch (err) {
        res.json({ message: err })
    }  
});

router.get('/image/:id', async (req, res) => { // Ruta ver una determinada imagen 
    try {
    const { id } = req.params;  // Se obtiene el id de la imagen 
    const image = await Image.findById(id); // Busca el archivo correspondiente al id 
    console.log(image);
    //const response = (res.json({image}));
    //console.log(response);
    res.render('profile', { image });
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/upload/', async (req, res) => { // Ruta para subir imagenes 
    //console.log(req.file); Imprime en consola el Json con los datos de a imagen subida 
    try {
    const {title, description, category} = req.body; // desde request body se extrae el titulo y la descripcion 
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    const image = new Image();
    image.title = req.body.title; // Recibe el titulo de la imagen
    image.description = req.body.description;  // Recibe la descripcion de la imagen
    image.category = req.body.category;  // Recibe la descripcion de la imagen
    image.filename = req.file.filename; // Recibe nombre de la imagen
    image.path = '/img/uploads/' + req.file.filename; // Recibe ruta de la imagen
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;
    image.imageURL = result.url;
    image.public_id = result.public_id;
    await image.save(); // Guarda objeto recien creado    
    await unlink(path.resolve('./src/public' + image.path)); // Elimina la imagen en base a su ruta 
    console.log(image); //Imprime objeto imagen creado
    res.redirect('/');
    } catch (err) {
        res.json({ message: err })
    }
});

router.get('/image/:id/delete', async (req, res) => { // Ruta para eliminar imagenes 
    try {
    const { id } = req.params; // Se obtiene el id de la imagen
    const image =  await Image.findByIdAndDelete(id); // Busca el id y elimina archivo relacionado 
    const result = await cloudinary.v2.uploader.destroy(image.public_id);
    res.redirect('/');
    } catch (err) {
        res.json({ message: err })
    }
});

module.exports = router; // Exporta el objeto router 


