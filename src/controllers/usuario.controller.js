// import { pool } from '../database'
const jwt = require('jsonwebtoken')
const pool = require('../database')

export const getAllusuario = async (req, res) => {
    try {
        const response = await pool.query('select * from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno....!');
    }
}


export const getUsuario = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from usuario where idusuario=$1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error Interno...!');
    }
}

export const createUsuario = async (req, res) => {

    try {
        const { username, password, estado,idpersona } = req.body;
        await pool.query('insert into usuario (  username, password, estado,idpersona ) values($1, $2, $3, $4)', [ username, password, estado,idpersona ]);
        jwt.sign(req.body, 'Secret Key', (error, token) => {
        
            return res.status(200).json(token);
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

export const signIn = async (req, res) => {

    try {
        const { username, password } = req.body;
    
        await pool.query('SELECT * FROM USUARIO WHERE username=$1 AND password=$2',[username,password],(err,result)=>{
            if (result.rows.length<=0) {
                return res.status(401).send("Usuario o Contraseña incorrecto !");
            }else{
                jwt.sign(req.body, 'Token', (error, token) => {
                    return res.status(200).json({token,username,password});
                });
            }
        });
            
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}
