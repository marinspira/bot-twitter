var twit = require('twit');
require('dotenv').config();

const Bot = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

function BotInit() {
  var query = {
    q: "React OR #ReactJS OR #ReactNative",
    result_type: "recent",
    lang: "en",
  };

  // This method fetches the most recent tweets based on your query
  Bot.get("search/tweets", query, BotGotLatestTweet);

  function BotGotLatestTweet(error, data, response) {

    try {
      data.statuses.forEach((status) => {
        const tweetText = status.text.toLowerCase();

        if (tweetText.includes("tutorial") || tweetText.includes("how")) {
          retweetWithComment(status.id_str, "✨ React Tutorial");
        } else if (tweetText.includes("job") || tweetText.includes("hiring") || tweetText.includes("vacancy")) {
          retweetWithComment(status.id_str, "🚀 React Job Vacancy");
        }
      })
    } catch (error) {
      console.log("Bot could not find recent tweets", error);
    }
  }

  function retweetWithComment(tweetId, comment) {
    Bot.post(
      'statuses/update',
      {
        status: `${comment} https://twitter.com/i/web/status/${tweetId}`,
      },
      function (error, tweet, response) {
        if (error) {
          console.log('Error while retweeting: ' + error);
        } else {
          console.log('Successfully retweeted with comment: ' + comment);
        }
      }
    );
  }
}

BotInit();
