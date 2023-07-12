import Client, { DefaultResponse } from "../../..";

export async function createStoreSubscription(client: Client, subscription: string, token: string): Promise<DefaultResponse> {
    const url = new URL(`${client.host}/api/store/subscription`);

    const body = {
        subscription,
        token
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
