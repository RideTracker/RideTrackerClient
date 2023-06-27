import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type LoginVerificationResponse = DefaultResponse & {
    key: string;
};

export async function verifyLogin(client: Client, verificationId: string, verificationCode: string): Promise<LoginVerificationResponse> {
    const url = new URL(`${client.host}/api/auth/login/verify`);

    const body = {
        id: verificationId,
        code: verificationCode
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
