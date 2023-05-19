import Client, { DefaultResponse } from "../..";

export type GetBikesResponse = DefaultResponse & {
    bikes: {
        id: string;
        name: string;
        model: string;
        image: string;

        summary?: {
            rides: number;
            distance: number;
            elevation: number;
        };
    }[];
};

export default async function getBikes(client: Client): Promise<GetBikesResponse> {
    const url = new URL("/api/bikes", client.host);

    return client.request("GET", url);
};
