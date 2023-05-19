import Client, { DefaultResponse } from "..";

export type PingResponse = DefaultResponse & {
    ping: string;
};

export default async function ping(client: Client): Promise<PingResponse> {
    const url = new URL("/api/ping", client.host);

    return client.request("GET", url);
};
