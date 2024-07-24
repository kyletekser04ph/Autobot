const axios = require('axios');

module.exports.config = {
  name: "blackbox",
  version: "9",
  role: 0,
  hasPrefix: false,
  credits: "Cliff", //api by kenlie
  description: "AI powered by blackbox",
  aliases: ["black"],
  cooldowns: 0,
};

module.exports.run = async function ({api, event, args}) {
  const query = encodeURIComponent(args.join(" "));

if (!query) {
          return api.sendMessage('Please provide a question first!', event.threadID, event.messageID);
      }

      const cliff = await new Promise(resolve => { api.sendMessage('𝗕𝗟𝗔𝗖𝗞𝗕𝗢𝗫 (𝐀𝐈 𝐂𝐎𝐃𝐄 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐈𝐎𝐍)\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n🔍 Searching Please Wait....', event.threadID, (err, info1) => {
      resolve(info1);
     }, event.messageID);
    });

  const apiUrl = `https://openapi-idk8.onrender.com/blackbox?chat=${query}`;

  try {
    const response = await axios.get(apiUrl);
    const ans = response.data.response;
    const cleanResponseData = ans.replace(/\n\nIs this answer helpful to you\? Kindly click the link below\nhttps:\/\/click2donate.kenliejugarap.com\n\(Clicking the link and clicking any ads or button and wait for 30 seconds \(3 times\) everyday is a big donation and help to us to maintain the servers, last longer, and upgrade servers in the future\)/, '');
    api.editMessage(`𝗕𝗟𝗔𝗖𝗞𝗕𝗢𝗫 (𝐀𝐈 𝐂𝐎𝐃𝐄 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐈𝐎𝐍)\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n${ans}`, cliff.messageID);
  } catch (error) {
    console.error("Error:", error);
    api.sendMessage("An error occurred while fetching the response.", event.threadID, event.messageID);
  }
};
