/*'use strict'

const path = require('path')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
let config = require('./config/index')
let db = require('./db')(config)

const appLocalsStringsMiddleware = require('./middlewares/app_locals')
const notFoundMiddleware = require('./middlewares/not_found')
const errorMiddleware = require('./middlewares/error')

const indexRoutes = require('./routes')*/
/*const productRoutes = require('./routes/product')
const locationRoutes = require('./routes/location')
const locationTypeRoutes = require('./routes/location_type')*/

/*const app = express()

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(flash())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(__dirname))*/



/*db.on('error', (err) => {
   console.log(err)
 })
 
 db.once('open', () => {
   console.log('\nDatabase create')
 })*/


/*app.use(appLocalsStringsMiddleware)

app.use('/', indexRoutes)
app.use('/product', productRoutes)
app.use('/location', locationRoutes)
app.use('/location-type', locationTypeRoutes)

app.use(notFoundMiddleware)
app.use(errorMiddleware)*/

/*const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema ({
   name: {
      type:String,
      require: true,
   },
   budget: {
      type:String,
      require: true,
   },
}, {timestamps: true})

const Client = mongoose.model('Client', clientSchema)

const client = new Client({
  name: 'ghy',
  budget: 300
})

if(client.save()) console.log('ok')*/


/*app.listen(process.env.PORT || 8080);
  console.log('Run server!');*/



  'use strict'

  const path = require('path')
  const express = require('express')
  const logger = require('morgan')
  const bodyParser = require('body-parser')
  const session = require('express-session')
  const flash = require('connect-flash')
  const config = require('./config/index')
  const db = require('./db')(config)
  
  const appLocalsStringsMiddleware = require('./middlewares/app_locals')
  const notFoundMiddleware = require('./middlewares/not_found')
  const errorMiddleware = require('./middlewares/error')
  
  const indexRoutes = require('./routes')
  //const productRoutes = require('./routes/product')
  //const locationRoutes = require('./routes/location')
  const clientRoutes = require('./routes/client')
  
  const app = express()
  
  app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
  app.use(flash())
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'pug')
  
  app.use(express.static(__dirname))
  
  app.use(appLocalsStringsMiddleware)
  
  app.use('/', indexRoutes)
  //app.use('/product', productRoutes)
  //app.use('/location', locationRoutes)
  app.use('/client', clientRoutes)
  
  app.use(notFoundMiddleware)
  app.use(errorMiddleware)
  
  const { host, port } = config
  
  app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
  })
  

