
interface OnePostReturn {
    title: string,
    Author: string,
    selftext: string | null,
    url: string,
    SubredditPrefix: string,
    ImageURL: string | null,
    IsNSFW: boolean,
    UpVotes: number,
    DownVotes: number,
    CommentsNum: number,
    score: number
};

export function GetRandompost(subreddit: string): Promise<OnePostReturn>;
export function GetRandomHotpost(subreddit: string): Promise<OnePostReturn>;
export function GetRandomNewpost(subreddit: string): Promise<OnePostReturn>;