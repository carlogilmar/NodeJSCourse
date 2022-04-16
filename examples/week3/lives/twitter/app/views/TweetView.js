const TweetService = require('./../services/TweetService')

class TweetView{

  static createTweet(payload){
    return TweetService.create(payload.message, payload.username)
  }

}

module.exports = TweetView
