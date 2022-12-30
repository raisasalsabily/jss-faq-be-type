import express from "express"
import categoryCtrl from "../controllers/categoryCtrl"
// import auth from "../middleware/auth"

const router = express.Router()

router.route("/category").post(categoryCtrl.createCategory)

export default router
