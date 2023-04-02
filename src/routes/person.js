let express = require('express'); //inyeccion de la dependencia
let router = express.Router();
//Instalacion del router

router.get('/student', (req, res) => {
    let t = req.params.id
    res.render('student');
});

router.post('/addStudent', (req, res) => {
    res.render('displayData', {
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre
    });
});

router.post('/personJson', express.json({type: '*/*'}), (req, res) => {
    console.log(`nombre: ${req.body.nombre} 
apellido: ${req.body.apellido}`); //Mandamos a la consola los datos
});

router.get('/testJson', (req, res) => {
    res.render('testJson'); //Renderizamos la vista
});

module.exports = router;