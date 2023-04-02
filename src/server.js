let express = require('express'); //inyeccion de la dependencia express

let app = express(); //app que hace la funcion del servidor

let personsRoute = require('./routes/person'); //incluimos el router que viene de persons
let addStudentRoute = require('./routes/addStudent');
let studentRoute = require('./routes/student');

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.use(personsRoute);
app.use(studentRoute);
app.use(addStudentRoute);
app.use('/assets', express.static(__dirname + '/../public')); //Contenido estatico

let PORT = process.env.PORT || 3000; //Definicion del puerto de escucha

app.listen(PORT, ()=>{
    console.log('Escuchando en el puerto 3000');
})