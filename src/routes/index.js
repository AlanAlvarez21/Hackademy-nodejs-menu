const { Router } = require('express'); // Se con figura el router que se importara

const router = Router(); // Guarda la información en un objecto llamado router

router.get('/', (req, res) => {
 res.send('Index Page');
});


router.get('/upload', (req, res) => { // Ruta ver imagenes imagenes 
    res.render('upload');
});

router.get('/image/:id', (req, res) => { // Ruta ver una determinada imagen 
    res.send('Profile Image');
});

router.post('/upload', (req, res) => { // Ruta para subir imagenes 
    console.log(req.file);
    res.send('Uploaded');
});

router.get('/image/:id/delete', (req, res) => { // Ruta para eliminar imagenes 
    res.send('Image deleted');
});




module.exports = router; // Exporta el objeto router 


