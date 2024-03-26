import  express  from 'express';
import { signin,signup,profile,editProfile,editPassword,deleteProfile } from "../controllers/userController.js";
import { authenticateToken, protect } from "../middleware/authentication.js";



const router = express.Router();

router.route("/signup").post(signup)
router.route("/signin").post(signin)
router.route("/profile").get(authenticateToken,profile)
router.route("/:id").put(authenticateToken,editProfile)
router.route("/editpassword").post(authenticateToken,editPassword)
router.route("/:id").delete(authenticateToken,deleteProfile)
//router.route("/all").get(showUsers)






export default router;