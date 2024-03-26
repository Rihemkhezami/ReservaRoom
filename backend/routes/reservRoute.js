import  express  from 'express';
import {create, deleteReservation, editReservation, showReservation, showReservations } from "../controllers/ReservController.js";
import { authenticateToken } from "../middleware/authentication.js";



const router = express.Router();

router.route("/create").post(authenticateToken,create)
router.route("/:id").get(showReservation)
router.route("/:id").put(editReservation)
router.route("/:id").delete(deleteReservation)
router.route("/").get(showReservations)









export default router;