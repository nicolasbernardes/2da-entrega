const database = require('../services/Database')


const Usuario = require('../models/usuarios')
const usuarioJSON = require('../data/usuario.json')

const addUsers = async () => {
    try {
        for (let usuario of usuarioJSON) {
            console.log(`insertando ${usuario.nome}`)
            await new Usuario(usuario).save()
        }
    } catch (error) {
        console.log('error.message')
    }
}


addUsers()