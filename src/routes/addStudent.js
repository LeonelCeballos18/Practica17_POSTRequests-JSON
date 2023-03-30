let express = require('express'); //inyeccion de la dependencia
let router = express.Router();
//Instalacion del router

router.post('/addStudent', (req, res)=>{ //render de los datos guardados del formulario
    res.render('displayData', { 
        nombre: req.body.nombre, //Datos que plasmaremos en nuestra vista
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre
    })
})

module.exports=router;