const modelPlantas = {
    queryAddPlants: `INSERT INTO Plants (Name, Description, Ability, Price, Damage, Ranges, Attack_Direction, Recharge, Family, Active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    queryPlantExists: `SELECT * FROM Plants WHERE Name = ?`,
}

module.exports = modelPlantas