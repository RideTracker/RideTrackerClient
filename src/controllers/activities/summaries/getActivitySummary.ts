import Client, { DefaultResponse } from "../../..";

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

export default async function getActivitySummary(client: Client, activityId: string): Promise<GetActivitySummaryResponse> {
    const url = new URL(`/api/activities/${activityId}/summary`, client.host);

    return client.request("GET", url);
};
