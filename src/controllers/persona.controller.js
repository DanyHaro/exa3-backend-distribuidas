import { pool } from '../database'


export const getAllpersona = async (req, res) => {
    try {
        const response = await pool.query('select * from persona');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}


export const getPersona = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from persona where idpersona=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

export const createPersona = async (req, res) => {

    try {
        const { nombres, apellidos, telefono } = req.body;
        await pool.query('insert into persona (  nombres, apellidos, telefono ) values($1, $2, $3)', [ nombres, apellidos, telefono ]);
        
        return res.status(200).json(
            `Usuario creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}