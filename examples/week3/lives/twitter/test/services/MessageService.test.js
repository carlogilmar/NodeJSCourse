const MessageService = require('./../../app/services/MessageService')

describe("Tests for MessageService", () => {

  test("Create a new tweet", () => {
    const message = MessageService.create("Message", "carlo", "gilmar")
    expect(message.message).toBe("Message")
    expect(message.receiver).toBe("carlo")
    expect(message.receptor).toBe("gilmar")
  })

})
