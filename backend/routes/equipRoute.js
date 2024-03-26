import  express  from 'express';
import {create, deleteEquipment, editEquipment, showEquipment, showEquipments } from "../controllers/EquipController.js";
import { authenticateToken } from "../middleware/authentication.js";



const router = express.Router();

router.route("/create").post(create)
router.route("/:id").get(showEquipment)

router.route("/").get(showEquipments)


router.route("/:id").put(editEquipment)
router.route("/:id").delete(deleteEquipment)








export default router;