const express = require("express");
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
const database = require('./src/services/Database')
const app = express();



const filmeRoutes = require('./src/routes/index')
const usuarioRoutes = require('./src/routes/usuarios.routes')


//middlewares
app.use(cors())
app.use(bodyParse.json())
app.use(morgan('dev'))

//routes
app.use('/', filmeRoutes)
app.use('/usuario',usuarioRoutes)

app.listen(8080, err=>{
    console.log(`Server on http://localhost:${8080}`)
})