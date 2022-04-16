const TweetService = require('./../services/TweetService')

class TwitterView{

  static createTweet(payload){
    return TweetService.create(payload.message, payload.username)
  }

}

module.exports = TwitterView
