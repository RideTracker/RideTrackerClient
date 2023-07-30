import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetDevicesResponse = DefaultResponse & {
    devices: {
        id: string;
        name: string;
    }[];
};

export async function getDevices(client: Client): Promise<GetDevicesResponse> {
    const url = new URL(`${client.host}/api/devices`);

    return Client.request(client, "GET", url);
};
