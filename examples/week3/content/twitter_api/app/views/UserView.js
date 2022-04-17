const UserService = require('./../services/UserService')

class UserView{

  static createUser(payload){
    if(payload === null){
      console.log("Error es null")
      return {error: "El payload no existe."}
    } else if(typeof payload.username === 'string' && typeof payload.name === 'string' && typeof payload.id === 'number') {
      return UserService.create(payload.id, payload.username, payload.name)
    } else{
      return {error: "Error, las propiedades del payload necesitan tener un valor válido"}
    }
  }

  static getAllUsers(){
    /*
      Agrega la lógica para regresar todos los users
    */
    const user1 = UserService.create(1, "username1", "name 1")
    const user2 = UserService.create(2, "username2", "name 2")
    const user3 = UserService.create(3, "username3", "name 3")
    return [user1, user2, user3]
  }

  static getUserById(userId){
    /*
      Agrega la lógica para regresar un User dado un id
    */
    return UserService.create(1, "username1", "name 1")
  }

  static updateUserById(userId, params){
    /*
      Agrega la lógica para actualizar un user
    */
    return {message: "Updated"}
  }

  static deleteUser(userId){
    /*
      Agrega la lógica para eliminar un user
    */
    return {message: "Deleted"}
  }
}

module.exports = UserView
