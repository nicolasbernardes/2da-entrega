const express = require('express')
const router = express.Router()
const Filme = require('../models/filme')



router.get('/', async (req, res) =>{
   try {
       const filmes = await Filme.find({})
       res.json({error:false, filmes})

    } catch (error) {

    res.json({error: true, message: error.message})

   }
})


router.get('/:id', async (req, res) =>{

    try {

        const id = req.params.id
        const filme = await Filme.findById(id)
        res.json({error:false, filmes})
        

    } catch (error) {
        res.json({error: true, message: error.message})
    }
    
})

router.post('/', async (req, res) =>{

    try {
        const filme = req.body
        const response = await new Filme(filme).save()
        res.json({error: false, filme: response})
    } catch (error) {
        res.json({error: true, message: error.message})
    }
    
})

router.put('/:id', async (req, res) =>{
    try {
        const id = req.params.id
        const novo_filme = req.body
        

        const filme = await Filme.findByIdAndUpdate(id, novo_filme)
        res.json({error: false, filme})
    } catch (error) {

        res.json({error: true, message: error.message})
    }
   
    
})

router.delete('/:id', async (req, res) =>{
    try {

        const id = req.params.id
        const deleted = await Filme.findByIdAndDelete(id)
        res.json({error: false})
    } catch (error) {
        res.json({error: true, message: error.message})
    }
   
})


module.exports =  router
   
