'use strict';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    GetRandompost: async function Getpost(subreddit) {
        const request = await fetch(`https://www.reddit.com/r/${subreddit}/random.json`);
        const [Data] = await request.json();
        const [post] = Data.data.children;
        return {
            title: post.data.title,
            selftext: post.data.selftext,
            url: `https://reddit.com${post.data.permalink}`,
            SubredditPrefix: post.data.subreddit_name_prefixed,
            ImageURL: post.data.url,
            IsNSFW: post.data.over_18,
            UpVotes: post.data.ups,
            CommentsNum: post.data.num_comments
        };
    }
}