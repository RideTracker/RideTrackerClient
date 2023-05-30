import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type LoginResponse = DefaultResponse & {
    verification: string;
};

export async function loginUser(client: Client, email: string, password: string): Promise<LoginResponse> {
    const url = new URL(`${client.host}/api/auth/login`);

    const body = {
        email,
        password
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
