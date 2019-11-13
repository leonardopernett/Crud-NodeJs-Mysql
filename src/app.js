const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mysql = require('mysql')
const myconnection =  require('express-myconnection')
const path = require('path')
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname ,'views')) ;
app.set('view engine', 'ejs');





//configurando la conectin 
app.use(myconnection(mysql, {
    host:'localhost',
    user:'root',
    password:'Admin09',
    port:3306,
    database:'crudmysql'
}, 'single'))


app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', require('./route/index.js'))

//static file
app.use(express.static(__dirname+'/public'))


app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
})