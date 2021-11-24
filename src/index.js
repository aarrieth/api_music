const express = require('express')
const helmet = require('helmet')
const routesOfMusic = require('./routes/')

const app = express()
const PORT = process.env.PORT || 3001

app.use(helmet())
app.use(express.json()) //para obtener el objeto body de la request en formato JSON

app.get('/', async (req, res)=> {
    const fullUrl =
    (await req.protocol) + '://' + req.get('Host') + req.originalUrl;
    res.status(200).json({
        "Discografia Diomedez Diaz": `${fullUrl}api/v1/music/diomedes-diaz`,
    })
})

routesOfMusic(app)

app.listen(PORT, ()=> {
    console.log(`Server run on: http://localhost:${PORT}`);
});
