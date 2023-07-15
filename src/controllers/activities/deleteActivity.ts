import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export async function deleteActivity(client: Client, activityId: string): Promise<DefaultResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/delete`);

    return Client.request(client, "DELETE", url);
};
