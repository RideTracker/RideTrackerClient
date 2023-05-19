import Client from "../..";

export type CreateAvatarResponse = {
    avatar: {
        id: string;
        name: string;
        type: string;
        image: string;
    };

    existingAvatar?: {
        image: string;

        images: {
            image: string;
        };
    };
};

export default async function requestAvatarCreation(client: Client, name: string, type: string, image: string): Promise<CreateAvatarResponse> {
    const url = new URL("/api/avatars", client.host);

    const body = {
        name,
        type,
        image
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
