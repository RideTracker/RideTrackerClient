import Client, { DefaultResponse } from "../..";

export type LoginResponse = DefaultResponse & {
    verification: string;
};

export default async function loginUser(client: Client, email: string, password: string): Promise<LoginResponse> {
    const url = new URL("/api/auth/login", client.host);

    const body = {
        email,
        password
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
