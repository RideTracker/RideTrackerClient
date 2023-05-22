import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetActivityResponse = DefaultResponse & {
    activity: {
        id: string;
        polylines?: string[];

        user: {
            id: string;
            name: string;
            avatar: string;
        };

        bike?: {
            id: string;
            name: string;
            model: string;
            image: string;

            summary?: {
                rides: number;
                distance: number;
                elevation: number;
            }
        };
        
        summary?: {
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

        comments: number;

        comment?: {
            message: string;

            user?: {
                id: string;
                name: string;
                avatar: string;
            };

            timestamp: number;
        };

        timestamp: number;
    };

    user: {
        likes: boolean;
    };
};

export default async function getActivityById(client: Client, activityId: string): Promise<GetActivityResponse> {
    const url = new URL(`${client.host}/api/activities/${activityId}`);

    return client.request("GET", url);
};
