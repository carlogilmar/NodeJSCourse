const Message = require('./../../app/models/message')

describe("Unit Tests for Message class", () => {

  // Revisar: https://jestjs.io/docs/using-matchers
  test('1) Create empty object', () => {
    const msg = new Message()
    expect(msg.message).toBeUndefined()
    expect(msg.receiver).toBeUndefined()
    expect(msg.receptor).toBeUndefined()
  })

	test('2) Create a message object', () => {
    const msg = new Message("Message", "Receiver", "Receptor")
		expect(msg.message).toBe("Message")
		expect(msg.receiver).toBe("Receiver")
		expect(msg.receptor).toBe("Receptor")
	});

  test('3) Set getter to get the message body', () => {
    const msg = new Message("Message Body", "Receiver", "Receptor")
    expect(msg.getMessage).toBe("Message Body")
  })

})
