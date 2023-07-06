import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type CreateBikeResponse = DefaultResponse & {
    bike: {
        id: string;
    };
};

export async function createBike(client: Client, name: string, model: string, images: string[]): Promise<CreateBikeResponse> {
    const url = new URL(`${client.host}/api/bikes/create`);

    const body = {
        name,
        model,
        images
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
