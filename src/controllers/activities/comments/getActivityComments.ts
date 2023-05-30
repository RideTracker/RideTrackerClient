import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

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

export async function getActivityComments(client: Client, activityId: string): Promise<GetActivityCommentsResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/comments`);

    return client.request("GET", url);
};
