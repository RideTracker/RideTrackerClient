import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type UploadUserAvatarResponse = DefaultResponse & {
    userAvatar: {
        id: string;
    };
};

export default async function uploadUserAvatar(client: Client, image: string, combination: string): Promise<UploadUserAvatarResponse> {
    const url = new URL(`${client.host}/api/user/avatar`);

    const body = {
        image,
        combination
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
