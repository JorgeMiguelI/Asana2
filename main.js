const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const path = require('path');
var multipart = require('multiparty');
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app = express();
const cors = require('cors');
/*const login = require('./src/login');
const Registro = require('./src/Registro');*/
app.use(router);

//Settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connection to DB
mongoose.connect('mongodb://127.0.0.1/Asana', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(db => console.log("db Connect Succes"))
    .catch(err => console.log("Error al conectar con BD"))


//Routes
app.use(require('./src/routes/routes'));

//Sever

app.listen(app.get('port'), () => {
    console.log(`Server Running on port ${app.get('port')}`);
});

//app.use("/",express.static("public"));



/*router.get("/", function(req, res) {
    var index = path.resolve(__dirname + "/public", "index.html");
    res.sendFile(index);
});*/

/*router.get("/principal", function(req, res) {
    var index = path.resolve(__dirname + "/public", "index.html");
    res.sendFile(index);
})*/




/*app.post('/login', function(req, res) {
    var respuesta = login.ProcesarInicio(req);

    respuesta.then(function(response) {
        console.log("-----End Login----------");
        console.log(response);
        res.send(response);

    }).catch((response) => {
        console.log(response);
        console.log("-----End Login----------");

        res.send(response);
    });*/






/*  console.log(req.query);
 console.log(req.body);
 console. log(req.body.correo);*/


// res.send("Correcto");
//});

/*app.get("/login", function(req, res) {

    console.log("---------------------------------------");
    //console.log(req);
    console.log(req.body);
    console.log(req.body.correo);

    console.log("---------------------------------------");
    res.send("Correcto");
});*/

/*app.post('/registro', function(req, res) {
    var respuesta = Registro.ProcesarInicio(req);

    respuesta.then(function(response) {
        console.log("Response:" + response);
        console.log("-----End Registro----------");

        res.send(response);

    });
});*/