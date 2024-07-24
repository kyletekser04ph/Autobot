const cron = require('node-cron');

module.exports.config = {
  name: "approveThread",
  version: "69.69",
  credits: "cliff",
  description: "Approve group threads automatically"
};

module.exports.handleEvent = async ({ api }) => {
  const minInterval = 5;
  let lastMessageTime = 0;
  let messagedThreads = new Set();

  const configCustom = {
    acceptPending: {
      status: true,
      time: 1, 
      message: "Hello, I'm your bot. I'm here to help you.",
      note: 'Approve waiting messages after a certain time. Set the status to false to disable auto-accept message requests.'
    }
  };

  function acceptPending(config) {
    if (config.status) {
      cron.schedule(`*/${config.time} * * * *`, async () => {
        const pendingThreads = await api.getThreadList(1, null, ['PENDING']);
        const otherThreads = await api.getThreadList(1, null, ['OTHER']);
        const allThreads = [...pendingThreads, ...otherThreads];

        if (allThreads.length > 0) {
          const threadID = allThreads[0].threadID;
          api.sendMessage('This Thread/User is automatically approved by Our System\n\nDon`t try to spam my bot to avoid being blocked🖕\nif you want to create your own bot visit this web server\n\n𝗖𝗛𝗢𝗢𝗦𝗘 𝗢𝗡𝗘:\n\t•https://main--autobot-psi-moshimosh.netlify.app/\n•http://192.210.175.9:6548/\n•http://158.101.198.227:8577\n•https://bit.ly/3QZWSET\nENJOY USING AUTOBOT😊🤪', threadID);
        }
      });
    }
  }  acceptPending(configCustom.acceptPending);
};