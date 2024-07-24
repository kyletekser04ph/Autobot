const axios = require("axios");

module.exports.config = {
    name: "ip",
    author: "cliff",
    countDown: 5,
    cooldown: 5,
    role: 0,
    hasPrefix: false,
    category: "boxchat",
    description: "see data of IP address",
};

module.exports.run = async function ({ api, event, args }) {
    const uid = event.senderID;
    if (!args.join("")) {
        api.sendMessage("Enter your IP address!!!", event.threadID, event.messageID);
    } else {
        var data = (await axios.get(`http://ip-api.com/json/${args.join(" ")}`)).data;
        if (data.status == "fail") {
            api.sendMessage("This IP address could not be found!", event.threadID);
        } else {
            api.sendMessage(
                {
                    body: `=====✅${data.status}✅=====\n🌍Continent: \n🏷Region name: ${data.regionName}\nCountry: ${data.country}\n🗺Region: ${data.region}\n🏞City: ${data.city}\n🏛 Country code: ${data.countryCode}\n⛽Zipcode: ${data.zip}\n⏱Time zone: ${data.timezone}\n💵 Currency: ${data.currency}\n📉 Longitude: ${data.lon}\n📈 Latitude: ${data.lat}\n 🔍 Organization name: ${data.org}\n👀 Query: ${data.query}\n`,
                    location: {
                        latitude: data.lat,
                        longitude: data.lon,
                        current: true,
                    },
                },
                event.threadID
            );
        }
    }
};
