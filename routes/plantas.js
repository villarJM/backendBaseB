const { Router } = require("express");
const { addPlants, getPlants, getPlantsByID, deletePlantByID, updatePlantByPlant } = require("../controllers/plantas");
const router = Router();

//http://localhost:4000/api/v1/messages
//http://localhost:4000/api/v2/plantas

/// GET ///
router.get("/getPlants", getPlants);
router.get("/getPlants/ID/:ID", getPlantsByID)
/// DELETE ///
router.delete("/deletePlants/ID/:ID", deletePlantByID)
/// PATCH ///
router.put("/updatePlants", updatePlantByPlant)
/// POST ///
router.post("/addPlants", addPlants);
module.exports = router;
