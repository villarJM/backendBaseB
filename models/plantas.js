const modelPlantas = {
    queryGetPlants: "SELECT * FROM Plants",
    queryGetPlantByID: `SELECT * FROM Plants WHERE ID = ?`,
    queryDeletePlantByID: `UPDATE Plants SET Active = 'N' WHERE ID = ?`,
    queryAddPlants: `INSERT INTO Plants (Name, Description, Ability, Price, Damage, Ranges, Attack_Direction, Recharge, Family, Active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    queryPlantExists: `SELECT * FROM Plants WHERE Name = ?`,
    queryUpdatePlantByPlant: `UPDATE Plants SET Name = ?, Description = ?, Ability = ?, Price = ?, Damage = ?, Ranges = ?, Attack_Direction = ?, Recharge = ?, Family = ? WHERE Name = ?`
}

module.exports = modelPlantas