import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetUserFollowersResponse = DefaultResponse & {
    followers: {
        id: string;
        timestamp: number;
        followsBack: boolean;

        follow: {
            id: string;
            name: string;
            avatar: string;
        };
    }[];

    offset: number;
    limit: number;
};

export async function getUserFollowers(client: Client, offset: number): Promise<GetUserFollowersResponse> {
    const url = new URL(`${client.host}/api/user/followers`);

    const body = {
        offset
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
