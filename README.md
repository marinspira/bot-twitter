# React Twitter Bot 🤖

## Overview
React Twitter Bot is a Twitter bot designed to support the React and React Native developer community. This bot automatically retweets job postings, tutorials, and other resources related to React and React Native. It's an excellent tool for staying updated with the latest opportunities and learning resources in the React ecosystem.

## Features
Automatic Retweets: The bot scans Twitter for tweets containing keywords related to React and React Native job openings and tutorials.
Community Support: Helps developers stay informed about the latest opportunities and educational resources.
Customizable Keywords: Easily customize the keywords the bot searches for to suit your needs.

## Installation
Clone the repository:

- git clone https://github.com/marinspira/bot-twitter.git
- cd react-twitter-bot

### Install the dependencies:
- npm install

### Create a .env file in the root directory and add your Twitter API keys and tokens:
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET_KEY=your_api_secret_key
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret

## Run the bot:
- npm start

## Usage
Once the bot is running, it will start monitoring Twitter for tweets containing keywords related to React and React Native. When it finds relevant tweets, it will automatically retweet them to your Twitter account.

## Customization
Keywords: You can modify the keywords the bot searches for by editing the keywords array in the config.js file.
Retweet Logic: Customize the retweet logic by editing the 'index.js' file.

## Contributing
Contributions are welcome! If you have suggestions, bug reports, or feature requests, feel free to open an issue or submit a pull request.