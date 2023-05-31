const express = require('express')
const handlebars = require('express-handlebars').engine

const app = express()

const pageExtensao = "hbs" 

app.use(express.static('public'))

app.set("views", "./src/views")

app.engine(pageExtensao, handlebars({
    defaultLayout: "main",
}))
app.set("view engine", pageExtensao)

app.get('/', function(req, res){
    res.render('index')
})

app.listen(8081, ()=> {
    console.log('Server online')
})