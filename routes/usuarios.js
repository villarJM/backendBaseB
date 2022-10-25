const {Router} = require("express")
const { getUsers, getUsersByID, deleteUserByID, addUser, updateUser, updateUserByUser} = require("../controllers/usuarios")
const router = Router()

//http://localhost:4000/api/v1/messages
//http://localhost:4000/api/v1/usuarios/id/

/// GET ///
router.get("/", getUsers)
router.get("/id/:id", getUsersByID)

/// DELETE ///
router.delete("/id/:id", deleteUserByID)

///PATCH///
router.put("/", updateUserByUser)
///POST///
router.post("/", addUser)
module.exports = router