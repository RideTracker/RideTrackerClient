import Client, { DefaultResponse } from "../../..";

export type LoginVerificationResponse = DefaultResponse & {
    key: string;
};

export default async function verifyLogin(client: Client, verificationId: string, verificationCode: string): Promise<LoginVerificationResponse> {
    const url = new URL("/api/auth/login/verify", client.host);

    const body = {
        id: verificationId,
        code: verificationCode
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
