import Client from "../../..";
import { CoordinateBounds } from "../../../models/CoordinateBounds";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetRoutesByFeedResponse = DefaultResponse & {
    routes: {
        id: string;
        polyline: string;
        distance: number;
        duration: string;
        color: string;
        timestamp: number;

        user: {
            id: string;
            name: string;
            avatar: string;
        };

        waypoints: {
            id: string;
            type: "PATH" | "SEARCH_PREDICTION";

            path?: {
                original: string;
                route: string;
                distance: number;
                duration: string;
            },

            searchPrediction?: {
                name: string;
                placeId?: string;
                location?: {
                    latitude: number;
                    longitude: number;
                };
            };
        }[];
    }[];

    offset: number;
    limit: number;
};

export async function getRoutesByFeed(client: Client, offset: number, bounds: CoordinateBounds): Promise<GetRoutesByFeedResponse> {
    const url = new URL(`${client.host}/api/routes/feed`);

    const body = {
        offset,
        bounds
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
