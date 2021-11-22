const api = require('../api.js');


class MusicServices {
    constructor(){
        this.ListOfSongs = api;
    }

    find(){
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(this.ListOfSongs)
            }, 2500)
        });
    }
}


module.exports = MusicServices;