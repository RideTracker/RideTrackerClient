import Client from "../..";

export type CreateActivityResponse = Response & {
    activity: {
        id: string;
    };
};

export default async function createActivity(client: Client, sessions: any, title?: string, description?: string, bikeId?: string): Promise<CreateActivityResponse> {
    const url = new URL("/api/activities/create", client.host);

    const body = {
        sessions,
        title,
        description,
        bikeId
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
