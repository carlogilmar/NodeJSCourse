const MessageService = require('./../services/MessageService')

class MessageView{

  static createMessage(payload){
    return MessageService.create(payload.message, payload.username_receiver, payload.username_receptor)
  }

}

module.exports = MessageView
