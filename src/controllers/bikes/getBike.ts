import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetBikeResponse = DefaultResponse & {
    bike: {
        id: string;
        name: string;
        model: string;
        image: string;
        activities: number;

        summary?: {
            key: string;
            value: number;
        }[];
    };
};

export async function getBike(client: Client, bikeId: string): Promise<GetBikeResponse> {
    const url = new URL(`${client.host}/api/bikes/${bikeId}`);

    return Client.request(client, "GET", url);
};
