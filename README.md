# `@develwoutacause` Twitter Archive

This is a public archive of all the tweets from my Twitter account `@develwoutacause`,
available at [tweets.dwac.dev](https://tweets.dwac.dev/). After recent changes in
Twitter's direction following the takeover by Elon Musk, I've decided to move away
from the platform and instead post on Mastodon at
[`@develwithoutacause@techhub.social`](https://techhub.social/@develwithoutacause/).
I encourage anyone to follow me there.

Twitter still holds a lot of historical content and conversations which I didn't want
to lose. So I've extracted my Twitter data and published it in this format. In
particular, most of this was forked from Zach Leatherman's
[`tweetback`](https://github.com/tweetback/tweetback/) repository with some
modifications to fit my own desired UX.

## Deploy

This is supposed to be a one-time extraction and archive of tweets, so it shouldn't
need regular deployments, but if it becomes necessary in the future, publish with the
command:

```shell
npm run -- netlify deploy -s "${SITE_ID}" --prod -m "Manual deployment from command line."
```
