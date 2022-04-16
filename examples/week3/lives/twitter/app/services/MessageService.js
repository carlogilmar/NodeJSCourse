const Message = require('./../models/message')

class MessageService {
  static create(message, username_receiver, username_receptor){
    return new Message(message, username_receiver, username_receptor)
  }

  static getMessageInfo(message){
    return Object.keys(message)
  }

  static getMessagesBodys(messages){
    return messages.map(message => message.message)
  }

}

module.exports = MessageService
