import  express  from 'express';
import { authenticateToken } from "../middleware/authentication.js";
import { showUsers } from '../controllers/usersController.js';



const router = express.Router();

router.route("/").get(showUsers);






export default router;