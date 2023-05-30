import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type AuthenticateUserResponse = DefaultResponse & {
    key: string;
    user: {
        id: string;
        name: string;
        avatar: string;
    };
};

export default async function authenticateUser(client: Client): Promise<AuthenticateUserResponse> {
    const url = new URL(`${client.host}/api/auth/renew`);

    return client.request("POST", url);
};
