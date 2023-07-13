import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetStoreProductsResponse = DefaultResponse & {
    products: string[];
};

export async function getStoreProducts(client: Client): Promise<GetStoreProductsResponse> {
    const url = new URL(`${client.host}/api/store/products`);

    return Client.request(client, "GET", url);
};
