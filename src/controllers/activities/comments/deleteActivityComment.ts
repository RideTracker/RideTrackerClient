import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type DeleteActivityCommentResponse = DefaultResponse;

export async function deleteActivityComment(client: Client, activityId: string, commentId: string): Promise<DeleteActivityCommentResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/comments/${commentId}`);

    return client.request("DELETE", url);
};
