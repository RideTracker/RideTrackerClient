import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetProfileActivitiesResponse = DefaultResponse & {
    activities: string[];
    offset: number;
};

export async function getProfileActivities(client: Client, userId: string, offset: number): Promise<GetProfileActivitiesResponse> {
    const url = new URL(`${client.host}/api/profiles/${userId}/activities`);

    const body = {
        offset
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
