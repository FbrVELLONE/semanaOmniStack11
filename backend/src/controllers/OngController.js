const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;  // .params; .query; body;
 
        const id = generateUniqueId();

        //Utiliza do import da conexao para passar os dados para o banco de dados;
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        //NEste caso ele retorna o id, porque é o que é necessario para a ong se indentificar na app
        return response.json({ id });
    }
}