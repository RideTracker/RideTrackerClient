import Client, { DefaultResponse } from "../../../..";

export type GetActivityCommentsSummaryResponse = DefaultResponse & {
    commentsCount: Number;

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

export default async function getActivityCommentsSummary(client: Client, activityId: string): Promise<GetActivityCommentsSummaryResponse> {
    const url = new URL(`/api/activities/${activityId}/comments/summary`, client.host);

    return client.request("GET", url);
};
