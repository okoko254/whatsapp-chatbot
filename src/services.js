const axios = require('axios');
const config = require('./config');

const sendMessage = async (to, message) => {
  try {
    const response = await axios.post(
      'https://waba.360dialog.io/v1/messages',
      {
        to: to,
        type: 'text',
        text: {
          body: message,
        },
      },
      {            
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.apiKey}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error.message);
    throw error;
  }
};

module.exports = { sendMessage };
