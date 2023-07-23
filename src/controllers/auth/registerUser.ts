import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type AuthRegisterResponse = DefaultResponse & {
    field?: string;
    
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

export async function registerUser(client: Client, firstname: string, lastname: string, email: string, password: string): Promise<AuthRegisterResponse> {
    const url = new URL(`${client.host}/api/auth/register`);

    const body = {
        firstname,
        lastname,
        email,
        password
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
