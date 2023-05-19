import Client from "../..";

export type AuthRegisterResponse = Response & {
    verification: string;
};

export default async function registerUser(client: Client, firstname: string, lastname: string, email: string, password: string): Promise<AuthRegisterResponse> {
    const url = new URL("/api/auth/register", client.host);

    const body = {
        firstname,
        lastname,
        email,
        password
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
