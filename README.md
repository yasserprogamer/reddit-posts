# Introduction

`reddit-posts` is a package to get a random reddit post data. In addition, it makes for programmer an easier work.

**NOTE:** This package is not made by reddit. It is just unofficial package to get random post data. It is legal to use.

## Installing package

**This is recommended command to execute in terminal to install package:**

```bash
npm i reddit-posts@latest
```

Any command that install package is okay to run.

## Requirements

**minimum requirements:**

- Having Node.js v12 or newer versions installed in your device.

**maximum requirements:**

- Having Node.js v16 or newer versions installed in your device.

# Example

Here is an example for this package:

```js
const RandomReddit = require("reddit-posts");

RandomReddit.GetRandompost("aww").then(async (data) => {
 	console.log(data.title); //returns title of a post. For example: "This is just an example!"
    console.log(data.SubredditPrefix); //return: r/aww
    console.log(data.IsNSFW); //return: false. If it is a NSFW post it will return true.
    console.log(data.UpVotes); //return: 919. Any number of post upvotes.
    console.log(data.ImageURL); //returns Image URL. For example: https://i.imgur.com/Example.jpg
    console.log(data.selftext); //returns selftext or description of a post. (String)
    console.log(data.url); //returns URL of post. For example: https://reddit.com/r/aww/comments/random/example/
    console.log(data.CommentsNum) // return: 4 or any number. It is for total comments number.
    console.log(data.Author); // Get an author username which returns a string.
    console.log(data.DownVotes); // DownVotes is just like data.UpVotes example and it returns number.
});
```



**If you are using this package in async function. I recommend you to use await. For example:**

```js
const PostData = await RandomReddit.GetRandompost("aww");
console.log(PostData.url);
```

I wish that example helps.



**NOTE:** About `GetRandomHotpost()` and `GetRandomNewpost()` function codes are just same as `GetRandompost()` function. You all gotta do is just replacing function names.



# What's new in 1.0.4

- Added new values to those functions: `score`.
- Added a new function and it is `GetRandomNewpost();`

