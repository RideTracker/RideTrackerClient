import Client, { DefaultResponse } from "../..";

export type GetBikeResponse = DefaultResponse & {
    bike: {
        id: string;
        name: string;
        model: string;
        image: string;

        summary?: {
            rides: number;
            distance: number;
            elevation: number;
        };
    };
};

export default async function getBike(client: Client, bikeId: string): Promise<GetBikeResponse> {
    const url = new URL(`/api/bikes/${bikeId}`, client.host);

    return client.request("GET", url);
};
