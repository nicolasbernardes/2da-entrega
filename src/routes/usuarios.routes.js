const express = require('express')
const router = express.Router()
const Usuarios = require('../models/usuarios')

router.post('/login', async (req, res) =>{

    try {
        const credenciais = req.body
        const usuario = await Usuarios.findOne(credenciais)
        res.json({error: false, Usuarios: response})

        if(usuario) {
            res.json({error: false, usuario})
        }else {
            res.json({error: true, message: 'no encontro el usuario'})
        }

    } catch (error) {
        res.json({error: true, message: error.message})
    }
    
})






module.exports =  router
   
