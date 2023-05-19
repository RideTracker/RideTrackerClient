import Client, { DefaultResponse } from "../../..";

export type UploadUserAvatarResponse = DefaultResponse & {
    userAvatar: {
        id: string;
    };
};

export default async function uploadUserAvatar(client: Client, image: string, combination: string): Promise<UploadUserAvatarResponse> {
    const url = new URL(`/api/user/avatar`, client.host);

    const body = {
        image,
        combination
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
