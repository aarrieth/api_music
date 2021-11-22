const express = require('express')
const routerMusic = require('../routes/music.routes')

function routesOfMusic(app){
    const router = express.Router();
    app.use('/api/v1/music', router)
    router.use('/diomedes-diaz', routerMusic)
}

module.exports = routesOfMusic;