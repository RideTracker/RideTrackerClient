import Client from "../../..";

export type DeleteActivityCommentResponse = Response;

export default async function deleteActivityComment(client: Client, activityId: string, commentId: string): Promise<DeleteActivityCommentResponse> {
    const url = new URL(`/api/activities/${activityId}/comments/${commentId}`, client.host);

    return client.request("DELETE", url);
};
