import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export async function createMessage(client: Client, message: string): Promise<DefaultResponse> {
    const url = new URL(`${client.host}/api/message`);

    const body = {
        message
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
