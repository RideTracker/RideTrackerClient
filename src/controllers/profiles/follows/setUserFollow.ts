import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type SetProfileFollowResponse = DefaultResponse & {
    follow: boolean;
};

export async function setProfileFollow(client: Client, userId: string, follow: boolean): Promise<SetProfileFollowResponse> {
    const url = new URL(`${client.host}/api/profiles/${userId}/follow`);

    const body = {
        follow
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
