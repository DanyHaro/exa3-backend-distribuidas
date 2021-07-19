import { pool } from '../database'


export const getAllarchivo = async (req, res) => {
    try {
        const response = await pool.query('select * from archivo');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}


export const getArchivo = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select doc.idarchivo, p.nombres, p.apellidos, doc.nombre as titulo, doc.tipo, doc.url from archivo doc, persona p, usuario usu where usu.idpersona = p.idpersona AND usu.idusuario = doc.idusuario AND usu.idusuario = $1 ', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

export const createArchivo = async (req, res) => {

    try {
        const { nombre, tipo, url,idusuario } = req.body;
        await pool.query('insert into archivo (  nombre, tipo, url,idusuario ) values($1, $2, $3 ,$4)', [ nombre, tipo, url,idusuario ]);
        
        return res.status(200).json(
            `Archivo creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

export const deleteArchivo = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from archivo where idarchivo=$1', [id]);
        return res.status(200).json('Archivo eliminado...!');
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}