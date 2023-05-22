import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetFeedResponse = DefaultResponse & {
    activities: {
        id: string;
        timestamp: number;
    }[];
};

export default async function getFeed(client: Client, search?: string, order?: string, timeline?: string): Promise<GetFeedResponse> {
    const url = new URL(`${client.host}/api/feed`);

    if(search?.length)
        url.searchParams.append("search", search);

    if(order?.length)
        url.searchParams.append("order", order);

    if(timeline?.length)
        url.searchParams.append("timeline", timeline);

    return client.request("GET", url);
};
