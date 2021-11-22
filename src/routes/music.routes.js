const express = require('express')
const MusicServices = require('../services/music.services')


const routerMusic = express.Router();

/* Create object to get all services from music.services
 *
 */
const listOfMusicFromSinger = new MusicServices();


routerMusic.get('/', async (req, res)=> {
    const listOfMusic = await listOfMusicFromSinger.find();
    res.status(200).json(listOfMusic)
})

module.exports = routerMusic