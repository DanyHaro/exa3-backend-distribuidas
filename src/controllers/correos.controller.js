const nodemailer = require('nodemailer');
// import { pool } from '../database'
const pool = require('../database')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'haro82507@gmail.com',
    pass: 'Estiloboladefuego1' // naturally, replace both with your real credentials or an application-specific password
  }
});

// const mailOptions = {
//   from: 'haro82507@gmail.com',
//   to: 'danyharo@upeu.edu.pe',
//   subject: 'EXAMEN 3 - DESARROLLO DE APLICACIONES DISTRIBUIDAS',
//   text: 'Estamos haciendo una prueba de envio de correos electronicos, por favor, ser tolerante.'
// };

const mailOptions = {
  from: 'haro80507@gmail.com',
  to: '',
  subject: '',
  text: ''
};

export const enviarCorreo = (req, res) => {

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json(error.message);
    } else {
      console.log('EMAIL SENT !: ' + info.response);
      return res.status(200).json(`Correo enviado correctamente...!`);
    }
  });

}

export const crearCorreo = async(req, res) => {

  try {

    const { destinatario, titulo, mensaje, fecha, idusuario } = req.body;
    mailOptions.to = req.body.destinatario
    mailOptions.subject = req.body.titulo
    mailOptions.text = req.body.mensaje

    await pool.query('insert into correo (  destinatario, titulo, mensaje, fecha, idusuario ) values($1, $2, $3 ,$4, $5)', [ destinatario, titulo, mensaje, fecha, idusuario ]);

    enviarCorreo();
    return res.status(200).json(`Correo creado.!` + req.body);

  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }

  
}

