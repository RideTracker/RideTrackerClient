import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetProfileResponse = DefaultResponse & {
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

export async function getProfileById(client: Client, userId: string): Promise<GetProfileResponse> {
    const url = new URL(`${client.host}/api/profiles/${userId}`);

    return Client.request(client, "GET", url);
};
