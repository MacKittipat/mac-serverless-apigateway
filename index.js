const axios = require('axios');

module.exports.handler = async (event) => {
    console.log('Running ...');
    let response = null;
    try {
        response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

    return JSON.stringify(response.data)
};
