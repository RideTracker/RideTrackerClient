import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetDeviceVerificationResponse = DefaultResponse & {
    code: {
        key: string;
        expires: number;
    };
};

export async function getDeviceVerification(client: Client): Promise<GetDeviceVerificationResponse> {
    const url = new URL(`${client.host}/api/devices/new`);

    return Client.request(client, "GET", url);
};
