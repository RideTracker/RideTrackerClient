import Client from "../../..";

export type GetProfileBikesResponse = Response & {
    bikes: string[];
    offset: number;
};

export default async function getProfileBikes(client: Client, userId: string, offset: number): Promise<GetProfileBikesResponse> {
    const url = new URL(`/api/profiles/${userId}/bikes`, client.host);

    const body = {
        offset
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
