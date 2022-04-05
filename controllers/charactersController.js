const axios = require("axios");

const charactersControllers = {
    listarPersonagens: async (req, res) => {
        try {
            const { data } = await axios.get("https://rickandmortyapi.com/api/character");
    
            console.log(data)
    
            return res.json({message: "Dados retornados com sucesso", data})
        } catch (error) {
            console.log(error);
            return res.json({message: "Erro ao listar personagens"})
        }
    },

    buscarPersonagem: async (req, res) => {
        try {
            const id = req.params.id
            const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

            console.log(data)
            return res.json({ message: "Personagem encontrado", imagemUrl: data.image })

        } catch (error) {
            console.log(error);
            return res.json({ message: "Erro ao buscar personagem" })
        }
    }
}

module.exports = charactersControllers;