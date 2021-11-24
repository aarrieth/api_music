const api = require('../api.js')
const { v4: uuidv4 } = require('uuid');


class MusicServices {
    constructor(){
        this.ListOfSongs = api
    }

    async create(payload){
        const newPayload= {
            id: uuidv4(),
            ...payload
        }
        this.ListOfSongs.push(newPayload)
        return newPayload
    }

    async find(){
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(this.ListOfSongs)
            }, 2500)
        });
    }

    async findById(id){
        const payload = api.find(item => item.id === id)
        if(!payload){
            throw new Error({
                message: "Data not found"
            })
        }
        return payload
    }

    async delete(id){
        const index = this.ListOfSongs.findIndex((item) => item.id === id);
        if (index === -1) {
        throw new Error({
            message: "Upp, data not found"
        });
        }
        this.ListOfSongs.splice(index, 1);
        return { id };
    }

    async update(id, payload) {
        const index = this.ListOfSongs.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new Error({
                message: 'uppss, data not found!'
            });
        }
        /**
         *  se obtiene la lista de canciones del indice previamente calculado
            para no realizar una asignación directa  que elimine los datos existente.
            Se realiza una copia sobre los datos existentes.
         */
        const values = this.ListOfSongs[index];
        this.ListOfSongs[index] = {
        ...values,
        ...payload,
        };
        return this.ListOfSongs[index];
    }
}


module.exports = MusicServices