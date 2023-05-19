import Client from "../..";

export type GetAvatarsResponse = Response & {
    avatars: {
        id: string;
        type: string;
        image: string;

        colors: {
            type: string;
            index: number;
            defaultColor: string;
        }[];

        images: {
            index: number;
            image: string;
            colorType: string;
        }[];
    }[];

    user: {
        avatars: {
            id: string;
            image: string;
            combination: any;
        }[];
    };
};

export default async function getAvatars(client: Client): Promise<GetAvatarsResponse> {
    const url = new URL("/api/avatars", client.host);

    return client.request("GET", url);
};
