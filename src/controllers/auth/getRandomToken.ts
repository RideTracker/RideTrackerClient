import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetRandomTokenResponse = DefaultResponse & {
    email: string;
    token: {
        key: string;
    };
};

export async function getRandomToken(client: Client): Promise<GetRandomTokenResponse> {
    const url = new URL(`${client.host}/api/auth/random`);

    return Client.request(client, "GET", url);
};
