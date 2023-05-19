import Client, { DefaultResponse } from "../../..";

export type UpdateActivityCommentResponse = Response;

export default async function updateActivityComment(client: Client, activityId: string, commentId: string, message: string): Promise<UpdateActivityCommentResponse> {
    const url = new URL(`/api/activities/${activityId}/comments/${commentId}`, client.host);

    const body = {
        message
    };

    return client.request("PATCH", url, undefined, JSON.stringify(body));
};
