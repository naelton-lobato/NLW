// importat dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');


// iniciando o express
const server = express()
server
    //utilizar body do req
    .use(express.urlencoded({ extended: true }))

    //utilizando arquivos estaticos
    .use(express.static('public'))

    // configurar templete engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')
     
    // rota da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar o servidores
server.listen(5500)
