const Tweet = require('./../models/tweet')

class TweetService{
  static create(message, username){
    return new Tweet(message, username)
  }

  static addUserRetweet(tweet, userRetweet){
    tweet.usersRetweet.push(userRetweet)
  }
}

module.exports = TweetService
