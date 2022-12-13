const express = require('express');
const dotenv = require('dotenv')
const app = express();
const morgan = require('morgan')
const bodayparser = require('body-parser');
const path = require('path');

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT  || 3000

//log url
app.use(morgan('tiny'))

//log
app.use(bodayparser.urlencoded({extended: true}))

app.set("view engine", "ejs")

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//routes
app.use('/',require('./server/routes/route'))

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)})