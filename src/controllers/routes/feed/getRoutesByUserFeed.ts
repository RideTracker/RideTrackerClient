import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export type GetRoutesByUserFeedResponse = DefaultResponse & {
    routes: {
        id: string;
        polyline: string;
        distance: number;
        duration: string;
        color: string;
        timestamp: number;

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

export async function getRoutesByUserFeed(client: Client, offset: number): Promise<GetRoutesByUserFeedResponse> {
    const url = new URL(`${client.host}/api/routes/feed/user`);

    const body = {
        offset
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
