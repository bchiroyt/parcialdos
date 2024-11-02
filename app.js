require('dotenv').config(); 
const express = require('express'); 
const path = require('path'); 
const exphbs = require('express-handlebars');
const app = express(); 


app.engine('hbs', exphbs.engine({ extname: '.hbs' })); 
app.set('view engine', 'hbs'); 

app.use(express.static(path.join(__dirname, 'public'))); 

const port = process.env.PORT; 


app.get('/', (req, res) => {
    res.render('home'); 
});

app.get('/electricos', (req, res) => {
    res.render('electricos'); 
});

app.get('/gasolina', (req, res) => {
    res.render('gasolina'); 
});

app.get('/diesel', (req, res) => {
    res.render('diesel'); 
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`); 
});