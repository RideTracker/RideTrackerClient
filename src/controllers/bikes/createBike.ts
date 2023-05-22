import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type CreateBikeResponse = DefaultResponse & {
    bike: {
        id: string;
        name: string;
    };
};

export default async function createBike(client: Client, name: string): Promise<CreateBikeResponse> {
    const url = new URL(`${client.host}/api/bikes`);

    const body = {
        name
    };

    return client.request("GET", url, undefined, JSON.stringify(body));
};
