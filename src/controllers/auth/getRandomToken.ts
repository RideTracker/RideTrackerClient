import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetRandomTokenResponse = DefaultResponse & {
    key: string;
};

export default async function getRandomToken(client: Client): Promise<GetRandomTokenResponse> {
    const url = new URL(`${client.host}/api/auth/random`);

    return client.request("GET", url);
};
