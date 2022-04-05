const axios = require("axios");

const locationsController = {
    listagemDeLocais: (req, res) => {
        axios.get("https://rickandmortyapi.com/api/location")
          .then(response => {
              res.json({message: "Locais encontrados", data: response.data})
          })
          .catch(error => {
              console.log(error);
              res.json({message: "Erro ao buscar locais"})
          })
    }
}

module.exports = locationsController