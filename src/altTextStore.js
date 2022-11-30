const { promises: fs } = require("fs");

let altTextMapPromise;

async function getAltText(tweetId) {
    const map = await getAltTextMap();
    return map.get(tweetId);
}

function getAltTextMap() {
    if (!altTextMapPromise) {
        altTextMapPromise = (async () => {
            const json = JSON.parse(await fs.readFile('database/alt.json', 'utf8'));
            const map = new Map(); // tweet_id -> alt_text

            for (const tweet of json) {
                map.set(tweet.tweet_id, tweet.alt_text);
            }

            return map;
        })();
    }

    return altTextMapPromise;
}

module.exports = {
    getAltText,
};
