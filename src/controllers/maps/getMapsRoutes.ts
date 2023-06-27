import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetMapsRoutesResponse = DefaultResponse & {
    routes: {
        polyline: string;
        distance: number;
        duration: string;
    }[];
};

export async function getMapsRoutes(client: Client, waypoints: {
  latitude: number;
  longitude: number;
}[]): Promise<GetMapsRoutesResponse> {
    const url = new URL(`${client.host}/api/maps/routes`);

    return Client.request(client, "POST", url, undefined, JSON.stringify({
        waypoints
    }));
};
