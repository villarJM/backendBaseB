const modelUsuarios = {
    queryGetUsers: "SELECT * FROM Usuarios",
    queryGetUserByID: `SELECT * FROM Usuarios WHERE ID = ?`,
    queryDeleteUserByID: `UPDATE Usuarios SET Activo = 'N' WHERE ID = ?`,
    queryUserExists: `SELECT Usuario FROM Usuarios WHERE Usuario = ?`,
    queryAddUser: `INSERT INTO Usuarios(Nombre, Apellidos, Edad, Genero, Usuario, Contrasena, 
        Fecha_Nacimiento, Activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    querySignIn: `SELECT Contrasena, Activo FROM Usuarios WHERE Usuario = ?`,
    queryCPUserExits:`SELECT Contrasena, Usuario FROM Usuarios WHERE Usuario = ?`,
    queryChangePass:`UPDATE Usuarios SET Contrasena = ? WHERE Usuario = ?`
}

const updateUsuario = (
    Nombre, Apellidos, Edad, Genero, Usuario, Fecha_Nacimiento
)=>{
    return `UPDATE Usuarios SET Nombre = '${Nombre}', Apellidos = '${Apellidos}', Edad = ${Edad}, ${Genero ? `Genero = '${Genero}',` : ''} Fecha_Nacimiento = '${Fecha_Nacimiento}' WHERE Usuario = '${Usuario}'`
}
module.exports = {modelUsuarios, updateUsuario}