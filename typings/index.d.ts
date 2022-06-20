
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
    CommentsNum: number
};

export function GetRandompost(subreddit: string): Promise<OnePostReturn>;