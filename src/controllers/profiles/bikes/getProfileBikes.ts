import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetProfileBikesResponse = DefaultResponse & {
    bikes: string[];
    offset: number;
};

export async function getProfileBikes(client: Client, userId: string, offset: number): Promise<GetProfileBikesResponse> {
    const url = new URL(`${client.host}/api/profiles/${userId}/bikes`);

    const body = {
        offset
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
