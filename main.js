const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
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
app.use(require('./src/routes/proyecto'));
app.use(require('./src/routes/Tareas'));
app.use(require('./src/routes/Colaborador'));
app.use(require('./src/routes/Equipos'));
app.use(require('./src/routes/Empresas'));

//Sever
app.listen(app.get('port'), () => {
    console.log(`Server Running on port ${app.get('port')}`);
});




