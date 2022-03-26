const mongoose = require('mongoose');


const Filme = mongoose.model('Filme', { 
    titulo: {
        type: String,
        required: true
    },
    atores: {
        type: {String},
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    detalhes: {
        type: String,
        required: true
    },
    premiacoes: {
        type: String,
        required: true
    }
});

module.exports = Filme