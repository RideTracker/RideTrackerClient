import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetVerificationCodeResponse = DefaultResponse & {
    code: string;
};

export async function getVerificationCode(client: Client, verificationId: string): Promise<GetVerificationCodeResponse> {
    const url = new URL(`${client.host}/api/auth/login/verify/${verificationId}/code`);

    return Client.request(client, "GET", url);
};
