import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetBikesResponse = DefaultResponse & {
    bikes: {
        id: string;
        name: string;
        model: string;
        image: string;
    }[];
};

export async function getBikes(client: Client): Promise<GetBikesResponse> {
    const url = new URL(`${client.host}/api/bikes`);

    return Client.request(client, "GET", url);
};
