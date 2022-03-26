let { db: firebaseDB } = require("./src/utils/firebase");
const productosArray = require('./src/data/productos.json')

( async ()=>{
    try {

        productosArray()

        let productos = firebaseDB.collection('productos');
        for (const producto of productosArray) {
            await productos.doc().set(producto)
        };
    }catch (error){
        console.log(error)
    };                                                
})()                                                /* () ----> para executar */
                                                    
