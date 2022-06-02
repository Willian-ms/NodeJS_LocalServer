// imports

const express = require('express')
const app = express()
const port = 3000

//Arquivos estáticos
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//Determina "views", que seriam as páginas que podem ser acessadas
app.set('views', './views')
app.set('view engine', 'ejs')

//Página "index"
app.get('', (req, res) => {
  res.render('index', { text: 'This is EJS' })
})

//Página "About"
app.get('/about', (req, res) => {
  res.render('about', { text: 'About page' })
})

// Servidor habilitado na porta 3000
app.listen(port, () => console.info(`listening on port ${port}`))
