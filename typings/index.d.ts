
interface OnePostReturn {
    title: string,
    selftext: string | null,
    url: string,
    SubredditPrefix: string,
    ImageURL: string | null,
    IsNSFW: boolean,
    UpVotes: number,
    CommentsNum: number
};

export function GetRandompost(subreddit: string): OnePostReturn;