import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type CreateRouteResponse = DefaultResponse & {
    route: {
        id: string;
    };
};

export async function createRoute(client: Client, polyline: string, distance: number, duration: string, waypoints: {
    type: "SEARCH_PREDICTION" | "PATH";

    searchPrediction?: {
        name: string;
        placeId?: string;
        location?: {
            latitude: number;
            longitude: number;
        };
    };

    path?: {
        original: string;
        route: string;
        distance: number;
        duration: string;
    };
}[]): Promise<CreateRouteResponse> {
    const url = new URL(`${client.host}/api/routes/create`);

    const body = {
        polyline,
        distance,
        duration,
        waypoints
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
