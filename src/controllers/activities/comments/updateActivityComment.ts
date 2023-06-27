import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type UpdateActivityCommentResponse = DefaultResponse;

export async function updateActivityComment(client: Client, activityId: string, commentId: string, message: string): Promise<UpdateActivityCommentResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/comments/${commentId}`);

    const body = {
        message
    };

    return Client.request(client, "PATCH", url, undefined, JSON.stringify(body));
};
