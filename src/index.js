const express = require('express')
const app = express()

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
