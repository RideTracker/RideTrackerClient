import Client from "../..";

export type GetProfileResponse = Response & {
    profile: {
        user: {
            id: string;
            name: string;
            avatar: string;
        };

        stats: {
            followers: number;
            activities: number;
        }
    };
};

export default async function getProfileById(client: Client, userId: string): Promise<GetProfileResponse> {
    const url = new URL(`/api/profiles/${userId}`, client.host);

    return client.request("GET", url);
};
