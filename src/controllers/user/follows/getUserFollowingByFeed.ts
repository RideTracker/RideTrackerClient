import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetUserFollowingResponse = DefaultResponse & {
    following: {
        id: string;
        followsBack: boolean;
        timestamp: number;

        follow: {
            id: string;
            name: string;
            avatar: string;
        };
    }[];

    offset: number;
    limit: number;
};

export async function getUserFollowing(client: Client, offset: number): Promise<GetUserFollowingResponse> {
    const url = new URL(`${client.host}/api/user/following`);

    const body = {
        offset
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
