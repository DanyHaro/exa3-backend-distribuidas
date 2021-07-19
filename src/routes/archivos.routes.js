import { Router } from 'express'
const router = Router();

import * as archivo from '../Controllers/archivo.controller'

router.get('/',archivo.getAllarchivo);
router.get('/:id',archivo.getArchivo);
router.post('/',archivo.createArchivo);
router.delete('/:id',archivo.deleteArchivo);



module.exports=router