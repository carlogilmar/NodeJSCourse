class Message{
  constructor(message, receiver, receptor){
    this.message = message
    this.receptor = receptor
    this.receiver = receiver
  }

  get getMessage(){
    return this.message
  }
}

module.exports = Message
