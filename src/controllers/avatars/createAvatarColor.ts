import Client, { DefaultResponse } from "../..";

export type CreateAvatarColorResponse = DefaultResponse & {
    avatar: {
        color: {
            id: string;
            type: string;
            index: number;
            defaultColor?: string;
        };
    };
};

export default async function createAvatarColor(client: Client, avatarId: string, type: string, index: number, defaultColor?: string): Promise<CreateAvatarColorResponse> {
    const url = new URL(`/api/avatars/${avatarId}/color`, client.host);

    const body = {
        type,
        index,
        defaultColor
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
