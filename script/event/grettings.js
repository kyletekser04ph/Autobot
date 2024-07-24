const moment = require('moment-timezone');

module.exports.config = {
  name: "greetings",
  version: "2.0.0",
  description: "Automatically sends messages based on set times.",
  credits: "Dipto",
};

module.exports.handleEvent = async function ({ api }) {
  const arrayData = {
    "12:00:00 PM": {
      message: "⏰ time now - 12:00 𝐏𝐌\n\n📌 good afternoon everyone don't forget to eat y'all lunch break🍛"
    },
    "01:00:00 AM": {
      message: "⏰ time now - 01:00 𝐀𝐌\n\n📌 good morning everyone!!, have a nice morning🍞☕🌅"
    },
    "02:00:00 AM": {
      message: "⏰ time now - 02:00 𝐀𝐌\n\n📌 don't forget to add/follow my owner☺."
    },
    "03:00:00 AM": {
      message: "⏰ time now - 03:00 𝐀𝐌\n\n📌 aga nyo nagising ahh"
    },
    "04:00:00 AM": {
      message: "⏰ time now - 04:00 𝐀𝐌\n\n📌 eyyy🤙don't panic it's organic eyyyyy🤙"
    },
    "05:00:00 AM": {
      message: "⏰ time now - 05:00 𝐀𝐌\n\n📌 aga nyo nagising ahh sanaol strong💀🙏"
    },
    "06:00:00 AM": {
      message: "⏰ time now - 06:00 𝐀𝐌\n\n📌 kape muna kayo☕"
    },
    "07:00:00 AM": {
      message: "⏰ time now - 07:00 𝐀𝐌\n\n📌 don't forget to eat y'all breakfast!! 🍞☕🍛"
    },
    "08:00:00 AM": {
      message: "⏰ time now - 08:00 𝐀𝐌\n\n📌 life update: pogi parin owner ko"
    },
    "09:00:00 AM": {
      message: "⏰ time now - 09:00 𝐀𝐌\n\n📌 baka hinde pa kayo kumain kain na kayo💀🙏"
    },
    "10:00:00 AM": {
      message: "⏰ time now - 10:00 𝐀𝐌\n\n📌 wag mo kalimutan e chat owner ko💀🙏"
    },
    "11:00:00 AM": {
      message: "⏰ time now - 11:00 𝐀𝐌\n\n📌 hinde mababawasan kapogian ng owner ko, btw have a nice morning everyone!!"
    },
    "12:00:00 PM": {
      message: "⏰ time now - 12:00 𝐏𝐌\n\n📌 kain na kayo mga lods💀"
    },
    "01:00:00 PM": {
      message: "⏰ time now - 01:00 𝐏𝐌\n\n📌 dont forget to eat y'all launchbreak😸"
    },
    "02:00:00 PM": {
      message: "⏰ time now - 02:00 𝐏𝐌\n\n📌 good afternoon!!, my owner is so handsome asf😎"
    },
    "03:00:00 PM": {
      message: "⏰ time now - 03:00 𝐏𝐌\n\n 📌 miss ko na sya:("
    },
    "04:00:00 PM": {
      message: "⏰ time now - 04:00 𝐏𝐌\n\n📌 magandang hapon mga lods😸"
    },
    "05:00:00 PM": {
      message: "⏰ time now - 05:00 𝐏𝐌\n\n📌 pogi ng owner ko na si Kyle 😎"
    },
    "06:00:00 PM": {
      message: "⏰ time now - 06:00 𝐏𝐌\n\n📌 don't forget to eat y'all dinner💀🙏"
    },
    "07:00:00 PM": {
      message: "⏰ time now - 07:00 𝐏𝐌\n\n📌 ano silbe ng pag online mo kung hinde mo din naman e chachat owner ko😎"
    },
    "08:00:00 PM": {
      message: "⏰ time now - 08:00 𝐏𝐌\n\n📌 kumain naba kayo?"
    },
    "09:00:00 PM": {
      message: "⏰ time now - 09:00 𝐏𝐌\n\n📌 matulog na kayo mga hangal😸"
    },
    "10:00:00 PM": {
      message: "⏰ time now - 10:00 𝐏𝐌\n--------------------------------\n📌 gabi na nag puyat parin kayo💀🙏"
    },
    "11:00:00 PM": {
      message: "⏰ time now - 11:00 𝐏𝐌\n\n📌 hinde mababawasan kapogian ng owner ko."
    }
  };

  const checkTimeAndSendMessage = async () => {
    const now = moment().tz('Asia/Manila');
    const currentTime = now.format('hh:mm:ss A');

    const messageData = arrayData[currentTime];

    if (messageData) {
      try {
        const threadList = await api.getThreadList(100, null, ["INBOX"], (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          return data;
        });

        threadList.forEach(async (thread) => {
          const threadID = thread.threadID;
          api.sendMessage({ body: messageData.message }, threadID);
        });
      } catch (error) {
        console.error('Error fetching thread list:', error);
      }
    }

    setTimeout(checkTimeAndSendMessage, 1000);
  };

  checkTimeAndSendMessage();
};
