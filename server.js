const express = require('express')
const expressHbs = require('express-handlebars')
const multer = require ('multer')
const app = express();
const cors = require('cors')
const routes = require('./routes/index');
const helper = require('./helper/helper')
const backendRoutes =  require("./routes/backend/index")
const session = require('express-session')
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session)
// const flashTimeoutMiddleware = require("./middleware/flashTimeOut")
const dbconfig = require('./connection/dbConfig')
// const bcrypt = require('bcrypt');




//middleware setups
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/static', express.static(__dirname + '/public'));


//handlebars setup
const hbs = expressHbs.create({
    extname: ".hbs",
    defaultLayout: "main.hbs",
    layoutsDir: "views/layout",
    helpers: helper

})

//setup session middleware
const sessionStore = new MySQLStore(dbconfig)
const oneDay = 24 * 60 * 60 * 1000;
app.use(session({
    secret: "ganesh12",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: ({
        maxAge: oneDay * 30
    })
}));



app.use(flash())
// app.use(flashTimeoutMiddleware.messageTimeOut)



//engine setup
app.engine("hbs", hbs.engine)
app.set("view engine", "hbs"
)

app.use(cors())

//using router as main router
app.use('/', routes);
app.use("/backend", backendRoutes)




// starting server form here
const port = process.env.port || 4000;
app.listen(port, (error)=>{
    if(error){
        return console.log(error)
    }else{
        console.log("listening")
        console.log(`http://localhost:${port}`)
    }
})