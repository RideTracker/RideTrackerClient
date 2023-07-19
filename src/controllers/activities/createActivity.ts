import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type CreateActivityResponse = DefaultResponse & {
    activity: {
        id: string;
    };
};

export async function createActivity(client: Client, localId: string, sessions: any, visibility: string): Promise<CreateActivityResponse> {
    const url = new URL(`${client.host}/api/activities/create`);

    const body = {
        localId,
        sessions,
        visibility
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
