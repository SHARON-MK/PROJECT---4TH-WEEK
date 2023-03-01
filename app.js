const express = require('express');
const app = express()

const bodyParser =require('body-parser');
const session = require('express-session');

const indexRouter = require('./routes/login');
const usersRouter = require('./routes/home');

const path = require('path');
const port = 3000
const hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({secret:'salah',saveUninitialized:true,resave:false,cookie:({maxAge:120000})}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req,res,next)=>{
    res.set('Cache-control','no-store,no-cache')
    next()
})


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));