import Client from "../../../..";
import { DefaultResponse } from "../../../../models/DefaultResponse";

export type GetActivityCommentsSummaryResponse = DefaultResponse & {
    commentsCount: number;

    comments: {
        id: string;
        parent: string;
        message: string;
        timestamp: number;
        comments_count: number;

        user?: {
            id: string;
            name: string;
            avatar: string;
        };
    }[];
};

export async function getActivityCommentsSummary(client: Client, activityId: string): Promise<GetActivityCommentsSummaryResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/comments/summary`);

    return client.request("GET", url);
};
