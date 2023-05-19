import Client, { DefaultResponse } from "../..";

export type GetFeedResponse = DefaultResponse & {
    activities: {
        id: string;
        timestamp: number;
    }[];
};

export default async function getFeed(client: Client, search?: string, order?: string, timeline?: string): Promise<GetFeedResponse> {
    const url = new URL("/api/feed", client.host);

    if(search?.length)
        url.searchParams.append("search", search);

    if(order?.length)
        url.searchParams.append("order", order);

    if(timeline?.length)
        url.searchParams.append("timeline", timeline);

    return client.request("GET", url);
};
