import axios from 'axios'

const url = "https://rickandmortyapi.com/api/character"

export const getCharacters = () => {
    return axios.get(url)
        .then(res => {

            return res.data
        }).catch(e => {
            console.log(e)
        })
}