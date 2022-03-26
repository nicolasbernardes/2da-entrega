const database = require('../services/Database')


const Filme = require('../models/filme')
const filmeJSON = require('../data/filme.json')

const addFilmes = async () => {
    try {
        for (let filme of filmeJSON) {
            console.log(`insertando ${filme.titulo}`)
            await new Filme(filme).save()
        }
    } catch (error) {
        console.log('error.message')
    }
}


addFilmes()