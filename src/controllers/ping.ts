import Client from "..";
import { DefaultResponse } from "../models/DefaultResponse";

export type PingResponse = DefaultResponse & {
    ping: string;
};

export async function ping(client: Client): Promise<PingResponse> {
    const url = new URL(`${client.host}/api/ping`);

    return client.request("GET", url);
};
