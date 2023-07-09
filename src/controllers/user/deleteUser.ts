import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export async function deleteUser(client: Client): Promise<DefaultResponse> {
    const url = new URL(`${client.host}/api/user/delete`);

    return Client.request(client, "DELETE", url);
};
