import Client, { DefaultResponse } from "../../..";

export type GetProfileActivitiesResponse = DefaultResponse & {
    activities: string[];
    offset: number;
};

export default async function getProfileActivities(client: Client, userId: string, offset: number): Promise<GetProfileActivitiesResponse> {
    const url = new URL(`/api/profiles/${userId}/activities`, client.host);

    const body = {
        offset
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
