import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetActivityCommentResponse = DefaultResponse & {
    comment: {
        id: string;
        parent?: string;
        message: string;
        timestamp: number;

        user?: {
            id: string;
            name: string;
            avatar: string;
        };
    };
};

export async function getActivityComment(client: Client, activityId: string, commentId: string): Promise<GetActivityCommentResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/comments/${commentId}`);

    return Client.request(client, "GET", url);
};
