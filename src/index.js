const express = require('express')

const api = [
    {
      id: 2,
      album: 'Titulo de amor',
      lanzamiento: 1993,
      artistas: 'Diomedes Diaz &  Juancho Rois',
      genero: 'vallenato',
      disquera: 'Sony Music',
      trackList: [
        {
          id: 1,
          nombre: 'Mi primera cana',
          compositor: {
            id: 3,
            nombre: 'Diomedes Diaz'
          },
          duracion: '4:20'
        },
        {
          id: 2,
          nombre: 'Dejala',
          compositor: {
            id: 4,
            nombre: 'Juan Humberto Rois'
          },
          duracion: '5:00'
        },
        {
          id:3,
          nombre: 'Conmigo si te va a da',
          compositor: {
            id: 3,
            nombre: 'Aurelio Nuñez'
          },
          duracion: '4:57'
        }
      ]
    },
    {
      id: 1,
      album: 'Mi vida musical',
      lanzamiento: 1991,
      artistas: 'Diomedes Diaz &  Juancho Rois',
      genero: 'vallenato',
      disquera: 'Sony Music',
      trackList: [
        {
            id: 1,
          nombre: 'Doblaron las campanas',
          compositor: {
            id: 1,
            nombre: 'Efren Calderon'
          },
          duracion: '5:09'
        },
        {
            id: 2,
          nombre: 'Parranda, ron y mujer',
          compositor: {
            id: 2,
            nombre: 'Romualdo Brito'
          },
          duracion: '5:30'
        },
        {
          id:3,
          nombre: 'Mi ahijado',
          compositor: {
            id: 2,
            nombre: 'Diomedez Diaz'
          },
          duracion: '4:35'
        }
      ]
    }
  ];


const app = express();

const PORT = 3001;

app.get('/', (req, res)=> {
    res.status(200).json({
        "Discografia Diomedez Diaz": `http://localhost:${PORT}/api/v1/colombian-music/diomedes-diaz`,
    })
})

app.get('/api/v1/colombian-music/diomedes-diaz', (req, res) => {
   res.json(api)
})

app.get('/api/v1/colombian-music/diomedes-diaz/:id', (req, res)=>{
    const {id} = req.params;
    const payload = api.find(item => item.id === parseInt(id))
    res.json(payload)
})


app.listen(PORT, ()=> {
    console.log(`Server run on: http://localhost:${PORT}`);
});
