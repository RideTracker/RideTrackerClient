import Client from "..";
import { DefaultResponse } from "../models/DefaultResponse";

export type StatusResponse = DefaultResponse & {
    status: "SUPPORTED" | "UNSUPPORTED" | "DEPRECATED";
    supersededBy?: string;
};

export async function getStatus(client: Client, device: string): Promise<StatusResponse> {
    const url = new URL(`${client.host}/api/status`);

    url.searchParams.append("device", device);

    return client.request("GET", url);
};
