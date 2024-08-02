module.exports.config = {
  name: "autobot",
  aliases: ["fbbot"],
  description: "This command make your account bot",
  hasPrefix: false,
  credits: "cliff",
  usage: "[name of cmd] [appstate] [prefix] [your_uid] [bot_name][adminName]",
  version: "1.0.0",
  role: 2,
  cooldown: 0
};

module.exports.run = async ({ api, event, args, admin }) => {
if (!admin.includes(event.senderID))
   return api.sendMessage("This Command is only for AUTOBOT owner.", event.threadID, event.messageID); 
  const input = args[0];
  const input_state = args[1]
  const input_prefix = args[2];
  const input_botName = args[3];
  const input_adminName = args[4];
  const input_admin = args[5];

  if (!input) {
    api.sendMessage(`This command make your account bot by providing requirements, Autobot [Appstate] [prefix][botName] [adminName] [admin_uid]`, event.threadID, event.messageID);
    return;
  } else if (input == "online") {
    try {
      const cliff = await new Promise(resolve => { api.sendMessage('⏳ Checking active session, Please wait...', event.threadID, (err, info1) => {
      resolve(info1);
     }, event.messageID);
    });  
    const urlsz = "http://venus.hidencloud.com:25748/info";   
    const response = await fetch(urlsz); 
    const aiList = await response.json();
    let message = "";
        if (Array.isArray(aiList)) {
          aiList.forEach((result, index) => {
     const { name, profileUrl, time } = result;
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
        message += `( ${index + 1} )\n𝗡𝗮𝗺𝗲: ${name}\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${profileUrl}\n𝗨𝗽𝘁𝗶𝗺𝗲: ${days}:${hours}:${minutes}:${seconds}\n\n`;
})
     api.editMessage(`List of Active.\n\n${message}`, cliff.messageID);
        } else {
  api.sendMessage("Handle error: aiList is not an array", event.threadID, event.messageID);
  console.error("Error: aiList is not a valid array");
        }
    } catch (err) {
      api.sendMessage(err.message, event.threadID, event.messageID)
      console.log(err)
    }
  } else if (input == "create") {

    try {
      const states = JSON.parse(input_state);
      if (states && typeof states === 'object') {

        let cmds = [{
          'commands': ["4chan",
    "discolm",
    "active-session",
    "adduser",
    "antiadmin",
    "ai",
    "Artify",
    "ask",
    "besh",
    "bing",
    "bio",
    "blackbox",
    "Block",
    "carbon",
    "chat",
    "clean",
    "adminoti",
    "count",
    "deepseek",
    "dictionary",
    "egif",
    "eval",
    "emi",
    "faceswap",
    "fbreport",
    "file",
    "filter",
    "findgay",
    "gemini",
    "gemma",
    "gen",
    "cookie",
    "glm",
    "goiadminn",
    "gpt",
    "gpt3",
    "gpt3turbo",
    "gpt4",
    "gpt4o",
    "gpt4turbo",
    "gpt5",
    "gptfun",
    "gptgo",
    "hastebin",
    "help",
    "hercai",
    "image",
    "imgbb",
    "imgur",
    "impostor",
    "info",
    "ip",
    "joke",
    "kick",
    "kickall",
    "listbox",
    "listfriend",
    "meta3",
    "lyrics",
    "mixtral",
    "sing",
    "nglspamm",
    "sendnoti",
    "npm",
    "obfuscate",
    "openai",
    "openchat",
    "out",
    "outall",
    "panda",
    "adc",
    "pinterest",
    "poli",
    "polyglot",
    "popcat",
    "prefix",
    "proxy",
    "quote",
    "qwen",
    "react",
    "replitstalk",
    "rpw",
    "rules",
    "scrape",
    "autoseen",
    "setemoji",
    "ss",
    "setnameall",
    "ship",
    "shoti",
    "shoticron",
    "sim",
    "snowflakes",
    "sc",
    "spamkick",
    "spotify",
    "spt",
    "stalk",
    "stream",
    "swap",
    "tempm",
    "tempnum",
    "tid",
    "tiktok",
    "tokengetter",
    "trans",
    "uid",
    "unblock",
    "unsend",
    "upscale",
    "uptime",
    "vicuna",
    "video",
    "war",
    "assistant",
    "weather",
    "whysoquiet",
    "zephyr"]
}, {
          'handleEvent': ["instagramDl",
    "antiout",
    "capcutDl",
    "MediaDownloader",
    "FBWatchDL",
    "pastebinThread&Admin",
    "randomReact",
    "resend"]
}];
        const create = await new Promise(resolve => { api.sendMessage('Creating please wait...', event.threadID, (err, info1) => {
      resolve(info1);
     }, event.messageID);
    });

        const response = await fetch('http://venus.hidencloud.com:25748/login', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            state: states,
            commands: cmds,
            prefix: input_prefix,
            botName: input_botName,
            adminName: input_adminName,
            admin: input_admin
          }),
        });
        const data = await response.json();
        if (data.success === 200) {
          api.editMessage(`${data.message}`, event.threadID, create.messageID)
          console.log(data.message)
        } else {
          api.editMessage(`${data.message}`, event.threadID, create.messageID)
        }
      } else {
        api.sendMessage('Invalid JSON data. Please check your input.', event.threadID, event.messageID);
      }
    } catch (parseErr) {
      api.sendMessage(`${parseErr.message}`, event.threadID, event.messageID)
      console.error(parseErr);
    }
  }
};