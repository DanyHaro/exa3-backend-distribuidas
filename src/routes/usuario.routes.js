import { Router } from 'express'
const router = Router();

import * as usuario from '../Controllers/usuario.controller'
const { checkToken } = require('../auth/tokenValidation');

router.get('/', usuario.getAllusuario);
router.get('/:id', usuario.getUsuario);
router.post('/', usuario.createUsuario);
router.post('/signIn', usuario.signIn);

module.exports=router