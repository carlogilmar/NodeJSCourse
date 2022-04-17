const TweetView = require('./../../app/views/TweetView')

describe("Tests for TweetView", () => {

  test("Create a tweet by a given valid payload", () => {
    const payload = {username: "username", message: "message"}
    const tweet = TweetView.createTweet(payload)
    expect(tweet.username).toBe("username")
    expect(tweet.message).toBe("message")
  })

})
