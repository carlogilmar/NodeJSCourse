const User = require('./../models/user')

class UserService {
  static create(id, username, name){
    return new User(id, username, name, "Sin bio")
  }

  static getInfo(user){
    return Object.keys(user)
  }

  static updateBio(user, bio){
    user.setBio = bio
  }

  static updateUserUsername(user, username){
    user.setUsername = username
  }

  static getAllUsernames(users){
    const usersUsernames = users.map( user => user.username)
    return usersUsernames
  }

}

console.log("User Service")
const myUser1 = UserService.create(1, "carlogilmar", "Carlo")

const myUser2 = UserService.create(1, "carlogilmar", "Carlo")
const myUser3 = UserService.create(1, "carlogilmar", "Carlo")

const users = [myUser1, myUser2, myUser3]
console.log(UserService.getAllUsernames(users))
console.log(UserService.getInfo(myUser1))
