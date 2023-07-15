import Client from "../..";
import { ActivitySummaryKey } from "../../models/ActivitySummaryKey";
import { ActivityVisibility } from "../../models/ActivityVisibility";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetActivityResponse = DefaultResponse & {
    activity: {
        id: string;
        title?: string;
        description?: string;
        polylines?: string[];
        startArea?: string;
        finishArea?: string;
        visibility: ActivityVisibility;

        user: {
            id: string;
            name: string;
            avatar: string;
        };

        bike?: string;
        
        summary: {
            key: ActivitySummaryKey;
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

    deleted?: boolean;
};

export async function getActivityById(client: Client, activityId: string): Promise<GetActivityResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}`);

    return Client.request(client, "GET", url);
};
