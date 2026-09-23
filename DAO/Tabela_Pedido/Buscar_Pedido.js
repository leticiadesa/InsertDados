import {conexao} from '../conexao.js'

async function Pedido (infos){
const data = [infos]
const sql = `INSERT INTO pedido (numero, data_elaboracao, id_cliente) VALUES ?`
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

export {Pedido}