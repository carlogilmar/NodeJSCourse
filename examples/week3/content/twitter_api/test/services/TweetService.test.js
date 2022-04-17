const TweetService = require('./../../app/services/TweetService')

describe("Tests for TweetService", () => {

  test("Create a new tweet", () => {
    const tweet = TweetService.create("tweet", "carlogilmar")
    expect(tweet.message).toBe("tweet")
    expect(tweet.username).toBe("carlogilmar")
    expect(tweet.usersRetweet).not.toBeUndefined()
  })

  test("Add a new userRetweet", () => {
    const tweet = TweetService.create("tweet", "carlogilmar")
    TweetService.addUserRetweet(tweet, "UserRetweet1")
    expect(tweet.usersRetweet).toContain("UserRetweet1")
  })

})
