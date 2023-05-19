import Client, { DefaultResponse } from "../../..";

export type CreateActivityCommentsResponse = DefaultResponse & {
    comment: {
        id: string;
        activity: string;
    };
};

export default async function createActivityComment(client: Client, activityId: string, message: string, parentId?: string): Promise<CreateActivityCommentsResponse> {
    const url = new URL(`/api/activities/${activityId}/comments`, client.host);

    const body = {
        parent: parentId,
        message
    };

    return client.request("POST", url, undefined, JSON.stringify(body));
};
