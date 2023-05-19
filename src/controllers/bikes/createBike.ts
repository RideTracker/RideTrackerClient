import Client from "../..";

export type CreateBikeResponse = Response & {
    bike: {
        id: string;
        name: string;
    };
};

export default async function createBike(client: Client, name: string): Promise<CreateBikeResponse> {
    const url = new URL("/api/bikes", client.host);

    const body = {
        name
    };

    return client.request("GET", url, undefined, JSON.stringify(body));
};
