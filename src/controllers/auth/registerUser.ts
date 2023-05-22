import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type AuthRegisterResponse = DefaultResponse & {
    verification: string;
};

export default async function registerUser(client: Client, firstname: string, lastname: string, email: string, password: string): Promise<AuthRegisterResponse> {
    const url = new URL(`${client.host}/api/auth/register`);

    const body = {
        firstname,
        lastname,
        email,
        password
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
