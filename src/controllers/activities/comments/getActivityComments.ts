import Client, { DefaultResponse } from "../../..";

export type GetActivityCommentsResponse = DefaultResponse & {
    comments: {
        id: string;
        parent?: string;
        message: string;
        timestamp: number;

        user?: {
            id: string;
            name: string;
            avatar: string;
        };
    }[];
};

export default async function getActivityComments(client: Client, activityId: string): Promise<GetActivityCommentsResponse> {
    const url = new URL(`/api/activities/${activityId}/comments`, client.host);

    return client.request("GET", url);
};
