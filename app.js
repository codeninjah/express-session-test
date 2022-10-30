const session = require('express-session')
const express = require('express')

const app = express()

app.use(session({ secret: 'grillkorv', cookie: { maxAge: 60000 }}))

app.get('/', function(req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')

        console.log("Number of visits is " + req.session.views)

        res.end()
      } else {
        req.session.views = 1
        console.log("This is your first time visiting this page!")
        res.end('welcome to the session demo. refresh!')
      }    
})


app.listen(8000, () => {
    console.log("Server up and running")
})
