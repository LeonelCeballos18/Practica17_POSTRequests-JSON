let express = require('express'); //inyeccion de la dependencia
let router = express.Router();
//Instalacion del router

router.get('/person', (req, res)=>{
    res.send('Has solicitado la lista de personas');
})

module.exports=router;