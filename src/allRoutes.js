import express, { Router } from "express";
const appe = express();

const usuario = require('./routes/usuario.routes');
appe.use('/usuario',usuario);

const persona = require('./routes/persona.routes');
appe.use('/persona',persona);

const archivo = require('./routes/archivos.routes');
appe.use('/archivo',archivo);

const correo = require('./routes/correo.routes');
appe.use('/correo',correo);

module.exports = appe;