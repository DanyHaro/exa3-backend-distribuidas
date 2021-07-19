import { Router } from 'express'
const router = Router();

import * as correos from '../Controllers/correos.controller'

router.post('/',correos.crearCorreo);


module.exports=router