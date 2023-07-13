import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetFeedResponse = DefaultResponse & {
    activities: {
        id: string;
        timestamp: number;
    }[];

    polls: {
        id: string;
        timestamp: number;
    }[];

    offsets: {
        activities: number;
        polls: number;
    };
};

export async function getFeed(client: Client, offsets: {
    activities: number;
    polls: number;
}, search?: string, order?: string, timeline?: string, includePolls: boolean = true): Promise<GetFeedResponse> {
    const url = new URL(`${client.host}/api/feed`);

    if(search?.length)
        url.searchParams.append("search", search);

    if(order?.length)
        url.searchParams.append("order", order);

    if(timeline?.length)
        url.searchParams.append("timeline", timeline);

    if(includePolls)
        url.searchParams.append("includePolls", (includePolls)?("true"):("false"));

    const body = {
        offsets
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
