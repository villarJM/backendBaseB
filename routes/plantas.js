const {Router} = require("express")
const {addPlants} = require("../controllers/plantas")
const router = Router()

//http://localhost:4000/api/v1/messages
//http://localhost:4000/api/v1/plantas

/// GET ///

/// DELETE ///

/// PATCH ///

/// POST ///
router.post("/addPlants", addPlants)
module.exports = router