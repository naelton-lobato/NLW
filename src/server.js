// importat dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');


// iniciando o express
const server = express()
server
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

//ligar o servidores
server.listen(5500)
