import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type LoginResponse = DefaultResponse & {
    verification?: string;

    token?: {
        key: string;
    };
    
    user?: {
        id: string;
        name: string;
        avatar: string;
        subscribed: boolean;
    };
};

export async function loginUser(client: Client, email: string, password: string): Promise<LoginResponse> {
    const url = new URL(`${client.host}/api/auth/login`);

    const body = {
        email,
        password
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
