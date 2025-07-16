const express = require('express');
const { sendMessage } = require('./services');

const router = express.Router();

router.post('/webhook', async (req, res) => {
  const { text, from } = req.body.messages[0];

  let replyMessage = 'Sorry, I did not understand that.';
  if (text.body.toLowerCase() === 'hello') {
    replyMessage = 'Hi there! How can I assist you today?';
  }

  try {
    await sendMessage(from, replyMessage);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    res.status(500).send('Failed to send message');
  }
});

module.exports = router;
