const express = require('express')
const morgan = require('morgan')
const handlebars= require('express-handlebars')
const path= require('path')
const app = express()
const port = 3000
const route=  require('./routes')

app.use(express.static(path.join(__dirname, 'public')))
// HTTP logger
app.use(morgan('combined'))
//template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));


//Routes init 
route(app);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})