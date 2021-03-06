import { Router } from 'express';
import PropertyController from '../controllers/PropertyController';

const router = Router();

router.get('/', PropertyController.getPropeties);
router.get('/:id', PropertyController.getASingleProperty);
router.post('/', PropertyController.addProperty);
router.put('/:id', PropertyController.updatedProperty);
router.delete('/:id', PropertyController.deleteProperty);

export default router;
