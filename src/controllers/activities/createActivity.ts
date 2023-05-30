import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type CreateActivityResponse = DefaultResponse & {
    activity: {
        id: string;
    };
};

export async function createActivity(client: Client, sessions: any, title?: string, description?: string, bikeId?: string): Promise<CreateActivityResponse> {
    const url = new URL(`${client.host}/api/activities/create`);

    const body = {
        sessions,
        title,
        description,
        bikeId
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
