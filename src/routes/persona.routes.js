import { Router } from 'express'
const router = Router();

import * as persona from '../Controllers/persona.controller'

router.get('/',persona.getAllpersona);
router.get('/:id',persona.getPersona);
router.post('/',persona.createPersona);

module.exports=router