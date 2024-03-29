import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type UploadUserAvatarResponse = DefaultResponse & {
    userAvatar: {
        id: string;
    };
};

export async function uploadUserAvatar(client: Client, image: string): Promise<UploadUserAvatarResponse> {
    const url = new URL(`${client.host}/api/user/avatar`);

    const body = {
        image
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
