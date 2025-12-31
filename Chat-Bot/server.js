const cors = require('cors');
const next = require('next');
const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const Sentiment = require('sentiment');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handler = app.getRequestHandler();
const sentiment = new Sentiment();

// ✅ Use `useTLS` instead of deprecated `encrypted`
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true
});

// ✅ In-memory chat history
const chatHistory = { messages: [] };

app.prepare()
  .then(() => {
    const server = express();

    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    // ✅ 1. Route to send message (with auto bot reply)
server.post('/message', async (req, res) => {
  const { user = null, message = '', timestamp = +new Date() } = req.body;
  const sentimentScore = sentiment.analyze(message).score;

  const chat = { user, message, timestamp, sentiment: sentimentScore };
  chatHistory.messages.push(chat);

  // Send user's message via Pusher
  pusher.trigger('chat-room', 'new-message', { chat });

  // Prepare a bot reply
  const lower = message.toLowerCase();
  let botReply = null;

  if (lower.includes('hello') || lower.includes('hi')) {
    botReply = 'Hello! 👋 How can I assist you today?';
  } else if (lower.includes('bye')) {
    botReply = 'Goodbye! 👋 Have a great day!';
  } else if (lower.includes('thank')) {
    botReply = "You're welcome! 😊";
  } else if (lower.includes('sad')) {
    botReply = "I'm here if you need to talk 💙";
  } else if (sentimentScore < -2) {
    botReply = "I'm sorry to hear that. Stay strong. 💪";
  }

  if (botReply) {
    const botChat = {
      user: 'Bot 🤖',
      message: botReply,
      timestamp: +new Date(),
      sentiment: sentiment.analyze(botReply).score
    };
    chatHistory.messages.push(botChat);
    pusher.trigger('chat-room', 'new-message', { chat: botChat });
  }

  res.status(200).json({ status: 'ok' });
});


    // ✅ 2. Route to get all chat messages
    server.post('/messages', (req, res) => {
      res.status(200).json({ ...chatHistory, status: 'success' });
    });

    // ✅ 3. Catch-all handler for Next.js pages
    server.all('*', (req, res) => {
      return handler(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });

  })
  .catch(ex => {
    console.error('Error starting server:', ex);
    process.exit(1);
  });
