import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetActivityResponse = DefaultResponse & {
    activity: {
        id: string;
        polylines?: string[];
        startArea?: string;
        finishArea?: string;

        user: {
            id: string;
            name: string;
            avatar: string;
        };

        bike?: {
            id: string;
            name: string;
            model: string;
            image: string;

            summary?: {
                rides: number;
                distance: number;
                elevation: number;
            }
        };
        
        summary: {
            key: string;
            value: number;
            personalBest: boolean;
        }[];

        comments: number;

        comment?: {
            message: string;

            user?: {
                id: string;
                name: string;
                avatar: string;
            };

            timestamp: number;
        };

        timestamp: number;
    };

    user: {
        likes: boolean;
    };
};

export async function getActivityById(client: Client, activityId: string): Promise<GetActivityResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}`);

    return Client.request(client, "GET", url);
};
