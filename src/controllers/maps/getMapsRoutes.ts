import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetMapsRoutesResponse = DefaultResponse & {
    polylines: string[];
};

export async function getMapsRoutes(client: Client, waypoints: {
  latitude: number;
  longitude: number;
}[]): Promise<GetMapsRoutesResponse> {
    const url = new URL(`${client.host}/api/maps/routes`);

    return client.request("GET", url, undefined, JSON.stringify({
        waypoints
    }));
};
