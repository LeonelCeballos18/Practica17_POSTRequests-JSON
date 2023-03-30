let express = require('express'); //inyeccion de la dependencia
let router = express.Router();
//Instalacion del router

router.get('/student',  (req, res)=> { //render de vista student
    res.render('student')
})

module.exports=router;