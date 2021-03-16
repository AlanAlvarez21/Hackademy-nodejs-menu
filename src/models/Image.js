const {Schema, model } = require('mongoose');

const imageSchema = new Schema({
    title: { type: String },
    description: { type: String },
    filename: { type: String },
    path: { type: String },
    originalname: { type: String },
    originalname: { type: String },
    mimetype: { type: String },
    originalname: { type: String },
    size: { type: Number },
    created_at: { type: Date, default: Date.now() },
    imageURL: {type: String},  // La dirección que otorga cloudinary 
    public_id: {type: String}// identificador otorgado por cloudinary, de está manera se mantiene un id unico por imagen

});

module.exports = model('Image', imageSchema);