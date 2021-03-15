const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
// Initializations 
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views')); // Se especifica donde está la carpeta views 
app.set('view engine', 'ejs'); // Se configura ejs con el render engine 


//Middlewares 
app.use(morgan('dev')); // Imprime en consola las peticiones que se le hace al servidor 
app.use(express.urlencoded({extended: false})); 
app.use(multer({dest: path.join(__dirname, 'img/uploads')}).single('image')); // Configura el directorio donde multer va a guardar imagenes 



//Global Variables

//Routes
app.use(require('./routes/index'));


//Static Files

//Start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});