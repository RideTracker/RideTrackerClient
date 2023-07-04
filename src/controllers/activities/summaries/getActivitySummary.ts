import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetActivitySummaryResponse = DefaultResponse & {
    activitySummary: {
        key: string;
        value: number;
        personalBest: boolean;
    }[];
};

export async function getActivitySummary(client: Client, activityId: string): Promise<GetActivitySummaryResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/summary`);

    return Client.request(client, "GET", url);
};
