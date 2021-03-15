const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_imagenes1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(db => console.log(`DB is connected`))
.catch(err => console.error(err));