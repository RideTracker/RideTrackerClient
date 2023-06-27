import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetActivitySummaryResponse = DefaultResponse & {
    activitySummary: {
        startArea: string;
        finishArea: string;

        distance: number;
        distancePersonalBest?: boolean;

        averageSpeed: number;
        averageSpeedPersonalBest?: boolean;

        elevation: number;
        elevationPersonalBest?: boolean;

        maxSpeed: number;
        maxSpeedPersonalBest?: boolean;
    };
};

export async function getActivitySummary(client: Client, activityId: string): Promise<GetActivitySummaryResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}/summary`);

    return Client.request(client, "GET", url);
};
