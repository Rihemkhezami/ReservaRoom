import  express  from 'express';
import {create, deleteSalle, editSalle, showSalle, showSalles } from "../controllers/SalleController.js";
import { authenticateToken } from "../middleware/authentication.js";



const router = express.Router();

router.route("/create").post(create)
router.route("/:id").get(showSalle)
router.route("/").get(showSalles)

router.route("/:id").put(editSalle)
router.route("/:id").delete(deleteSalle)








export default router;