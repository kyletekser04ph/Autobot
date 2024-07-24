module.exports.config = {
  name: 'gpt4o',
  version: '1.1.1',
  hasPermssion: 0,
  role: 0,
  credits: "cliff",
  author: '',
  description: 'An powered by openai',
  usePrefix: false,
  hasPrefix: false,
  commandCategory: 'AI',
  usage: '[prompt]',
  cooldown: 0,
};

module.exports.run = async function({ api, event, args }) {
  const axios = require('axios');

  let user = args.join(' ');

  try {
      if (!user) {
          return api.sendMessage('Please provide a question first!', event.threadID, event.messageID);
      }

      const cliff = await new Promise(resolve => { api.sendMessage('𝗚𝗣𝗧-𝟰𝗼 (8k-context)\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n🔍 Searching Please Wait....', event.threadID, (err, info1) => {
      resolve(info1);
     }, event.messageID);
    });

const response = await axios.get(String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 97, 112, 105, 46, 107, 101, 110, 108, 105, 101, 106, 117, 103, 97, 114, 97, 112, 46, 99, 111, 109, 47, 102, 114, 101, 101, 103, 112, 116, 52, 111, 56, 107, 47, 63, 113, 117, 101, 115, 116, 105, 111, 110, 61) + encodeURIComponent(user));

      const responseData = response.data.response;
      const cleanResponseData = responseData.replace(/\n\nIs this answer helpful to you\? Kindly click the link below\nhttps:\/\/click2donate.kenliejugarap.com\n\(Clicking the link and clicking any ads or button and wait for 30 seconds \(3 times\) everyday is a big donation and help to us to maintain the servers, last longer, and upgrade servers in the future\)/, '');
      const baby = `𝗚𝗣𝗧-𝟰𝗼 (8k-context)\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n${cleanResponseData}`;
      api.editMessage(baby, cliff.messageID);
  } catch (err) {
      console.error(err);
      return api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
