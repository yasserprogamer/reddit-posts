'use strict';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    GetRandompost: async function (subreddit) {
        if(subreddit.replace(" ", "") == ""){ throw TypeError("Subreddit in GetRandompost() function must be non-empty string."); } else if(!subreddit){ throw TypeError("Subreddit argument is required."); };
        const request = await fetch(`https://www.reddit.com/r/${subreddit}/random.json`);
        const [Data] = await request.json();
        const [post] = Data.data.children;
        return {
            title: post.data.title,
            Author: post.data.author,
            selftext: post.data.selftext,
            url: `https://reddit.com${post.data.permalink}`,
            SubredditPrefix: post.data.subreddit_name_prefixed,
            ImageURL: post.data.url,
            IsNSFW: post.data.over_18,
            UpVotes: post.data.ups,
            DownVotes: post.data.downs,
            CommentsNum: post.data.num_comments,
            score: post.data.score
        };
    },
    GetRandomHotpost: async function (subreddit) {
        if(subreddit.replace(" ", "") == ""){ throw TypeError("Subreddit in GetRandomHotpost() function must be non-empty string."); } else if(!subreddit){ throw TypeError("Subreddit argument is required."); };
        const request = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json`);
        const Data = await request.json();
        var length = Data.data.children.length;
        var RandomPost = Math.floor(Math.random() * length);
        if(length == 1) RandomPost = 0;
        const post = Data.data.children[RandomPost];
        return {
            title: post.data.title,
            Author: post.data.author,
            selftext: post.data.selftext,
            url: `https://reddit.com${post.data.permalink}`,
            SubredditPrefix: post.data.subreddit_name_prefixed,
            ImageURL: post.data.url,
            IsNSFW: post.data.over_18,
            UpVotes: post.data.ups,
            DownVotes: post.data.downs,
            CommentsNum: post.data.num_comments,
            score: post.data.score
        };
    },
    GetRandomNewpost: async function (subreddit) {
        if(subreddit.replace(" ", "") == ""){ throw TypeError("Subreddit in GetRandomNewpost() function must be non-empty string."); } else if(!subreddit){ throw TypeError("Subreddit argument is required."); };
        const request = await fetch(`https://www.reddit.com/r/${subreddit}/new.json`);
        const Data = await request.json();
        var length = Data.data.children.length;
        var RandomPost = Math.floor(Math.random() * length);
        if(length == 1) RandomPost = 0;
        const post = Data.data.children[RandomPost];
        return {
            title: post.data.title,
            Author: post.data.author,
            selftext: post.data.selftext,
            url: `https://reddit.com${post.data.permalink}`,
            SubredditPrefix: post.data.subreddit_name_prefixed,
            ImageURL: post.data.url,
            IsNSFW: post.data.over_18,
            UpVotes: post.data.ups,
            DownVotes: post.data.downs,
            CommentsNum: post.data.num_comments,
            score: post.data.score
        };
    }
}