import {conexao} from '../conexao.js'

//Clientes que compraram produtos até 800 reias.//S
async function buscarClientes(){
  console.log('DAO de CLIENTE')
    const sql = `SELECT * FROM Cliente`
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}


export {buscarClientes}
