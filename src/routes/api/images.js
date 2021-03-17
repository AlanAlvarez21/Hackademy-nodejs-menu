const { Router, response } = require('express'); // Se con figura el router que se importara
const router = Router(); // Guarda la información en un objecto llamado router
const Image = require('../../models/Image'); // Importa el modelo de imagenes 
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
    const response = (res.json({images}));
    console.log(response);
    } catch (err) {
        res.json({ message: err })
    }  
});


router.get('/:id', async (req, res) => { // Ruta ver una determinada imagen 
    try {
    const { id } = req.params;  
    const image = await Image.findById(id);
    const response = (res.json({image}));
    console.log(response);
    } catch (err) {
        res.json({ message: err })
    }
});


router.get('/delete/:id', async (req, res) => { // Ruta para eliminar imagenes 
    try {
    const { id } = req.params; 
    const image =  await Image.findByIdAndDelete(id); 
    const result = await cloudinary.v2.uploader.destroy(image.public_id);
    const response = (res.json({result}));
    console.log(result);    
} catch (err) {
        res.json({ message: err })
    }
});

router.post('/upload', async (req, res) => { // Ruta para subir imagenes 
    try {
    const {title, description, category} = req.body;  
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    const image = new Image();
    image.title = req.body.title; 
    image.description = req.body.description;  
    image.category = req.body.category;  
    image.filename = req.file.filename; 
    image.path = '/img/uploads/' + req.file.filename; 
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;
    image.imageURL = result.url;
    image.public_id = result.public_id;
    await image.save();  
    await unlink(path.resolve('./src/public' + image.path)); 
    const response = (res.json({image}));
    console.log(response);
    } catch (err) {
        res.json({ message: err })
    }
});


module.exports = router; // Exporta el objeto router 


