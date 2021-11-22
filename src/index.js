const express = require('express')
const helmet = require('helmet')
const routesOfMusic = require('./routes/')

const app = express();
const PORT = 3001;

app.use(helmet())
app.use(express.json()) //para obtener el objeto body de la request en formato JSON

app.get('/', (req, res)=> {
    res.status(200).json({
        "Discografia Diomedez Diaz": `http://localhost:${PORT}/api/v1/music/diomedes-diaz`,
    })
})

routesOfMusic(app)

/* app.get('/api/v1/colombian-music/diomedes-diaz', (req, res) => {
   res.json(api)
})

app.get('/api/v1/colombian-music/diomedes-diaz/:id', (req, res)=>{
    const {id} = req.params;
    const payload = api.find(item => item.id === parseInt(id))
    if(payload){
        res.json(payload)
    } else{
        res.status(404).json({
            message: "Disco no encontrado"
        })
    }
})

app.delete('/api/v1/colombian-music/diomedes-diaz/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const disc = api.filter(item => item.id != id);
    res.status(204).end()
})

app.post('/api/v1/colombian-music/diomedes-diaz', (req, res)=>{
   const newData = req.body;
   res.status(201).json({
       message: "Se ha insertado con exito",
       data: newData,
   })
}) */

app.listen(PORT, ()=> {
    console.log(`Server run on: http://localhost:${PORT}`);
});
