import {conexao} from '../conexao.js'

async function Endereco (infos){
const data = [infos]
const sql = `INSERT INTO endereco (id_endereco, logradouro, numero, cep, cidade) VALUES ?`
const conn = await conexao()

try {
// Executar a consulta
const [results] = await conn.query(sql,[data]);

await conn.end()
return results
} catch (err) {
return err.message
}
}

export {Endereco}