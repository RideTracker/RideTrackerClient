import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export async function updateActivity(client: Client, activityId: string, visibility: string, title?: string, description?: string, bikeId?: string): Promise<DefaultResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/update`);

    const body = {
        visibility,
        title,
        description,
        bikeId
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
