let fontEnabled = true;

function formatFont(text) { 
  const fontMapping = {
    a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂", j: "𝗃", k: "𝗄", l: "𝗅", m: "𝗆",
    n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋", s: "𝗌", t: "𝗍", u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓",
    A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤", F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨", J: "𝖩", K: "𝖪", L: "𝖫", M: "𝖬",
    N: "𝖭", O: "𝖮", P: "𝖯", Q: "𝖰", R: "𝖱", S: "𝖲", T: "𝖳", U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹"
  };

  let formattedText = "";
  for (const char of text) {
    if (fontEnabled && char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }

  return formattedText;
}

module.exports.config = {
  name: 'gpt4',
  version: '1.1.1',
  hasPermssion: 0,
  role: 0,
  credits: "cliff",
  author: '',
  description: 'trained by google',
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

      const cliff = await new Promise(resolve => { api.sendMessage('(ɢᴘᴛ4-ᴛʀᴀɪɴᴇᴅ ʙʏ ᴏᴘᴇɴᴀɪ)\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n🔍 Searching Please Wait....', event.threadID, (err, info1) => {
      resolve(info1);
     }, event.messageID);
    });

      const utot = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 109, 97, 114, 107, 100, 101, 118, 115, 45, 97, 112, 105, 46, 111, 110, 114, 101, 110, 100, 101, 114, 46, 99, 111, 109, 47, 97, 112, 105, 47, 118, 51, 47, 103, 112, 116, 52, 63, 97, 115, 107, 61);
const encodedUser = encodeURIComponent(user);
const url = utot + encodedUser;

const response = await axios.get(url);

      const responseData = response.data.answer;
      const baby = `(ɢᴘᴛ4-ᴛʀᴀɪɴᴇᴅ ʙʏ ᴏᴘᴇɴᴀɪ)\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n${responseData}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱`;
      api.editMessage(baby, cliff.messageID);
  } catch (err) {
      console.error(err);
      return api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};