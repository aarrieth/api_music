const express = require('express')
const MusicServices = require('../services/music.services')


const routerMusic = express.Router()

/* Create object to get all services from music.services
 *
 */
const musicServices = new MusicServices()


routerMusic.get('/', async (req, res)=> {
    const listOfMusic = await musicServices.find()
    res.status(200).json(listOfMusic)
})

routerMusic.get('/:id', async (req, res)=> {
    try {
        const {id} = req.params
        const data = await musicServices.findById(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({
            message: "Data not found"
        })
    }
})

routerMusic.post('/', async (req, res)=>{
    const data = req.body
    const newData = await musicServices.create(data);
    res.status(201).json(newData)
})

routerMusic.delete('/:id', async (req, res)=>{
    const {id} = req.params
    const data = await musicServices.delete(id)
    res.json(data)
})

routerMusic.put('/:id', async (req, res)=> {
    try {
        const {id} = req.params
        const body = req.body
        const data = await musicServices.update(id, body)
        console.log(data)
        res.json(data)
    } catch (error) {
        res.status(404).json({
        message: error.message,
        })
    }
})

routerMusic.patch('/:id', async (req, res)=> {
    try {
        const {id} = req.params
        const body = req.body
        const data = await musicServices.update(id, body)
        console.log(data)
        res.json(data)
    } catch (error) {
        res.status(404).json({
        message: error.message,
        })
    }
})


module.exports = routerMusic