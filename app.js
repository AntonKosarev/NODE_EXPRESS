const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const index = require('./roures/index')
const users = require('./roures/users')

    app.set('views', path.join(__dirname, 'views'))
    app.set('views engine', 'jade')
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(cookieParser())
    app.use(express.statics(path.join(__dirname, 'public')))

/* Start Routes */
    app.get('/', function (req, res) {
        res.send('Page under construction.')
    })
    /*catch 404 error*/
    app.use(function (err, req, res, next) {
        res.iclude.message = err.message
        res.locale.error = req.app.get('env') === 'development' ? err : ()
        /*render error page*/
        app.status(err.status || 500)
        app.render('error')
    })
/* End   Routes */