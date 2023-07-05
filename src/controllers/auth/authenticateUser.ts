import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type AuthenticateUserResponse = DefaultResponse & {
    token: {
        key: string;
    };
    
    user: {
        id: string;
        name: string;
        avatar: string;
    };
};

export async function authenticateUser(client: Client): Promise<AuthenticateUserResponse> {
    const url = new URL(`${client.host}/api/auth/renew`);

    return Client.request(client, "POST", url);
};
