import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";
import { PlaceAutocompletePrediction } from "../../models/PlaceAutocompletePrediction";

export type GetMapsGeocodeResponse = DefaultResponse & {
    places: {
        placeId: string;
        address: string;
        location: {
            latitude: number;
            longitude: number;
        };
    }[];
};

export async function getMapsGeocode(client: Client, placeId: string): Promise<GetMapsGeocodeResponse> {
    const url = new URL(`${client.host}/api/maps/geocode`);
    url.searchParams.append("placeId", placeId);

    return Client.request(client, "GET", url);
};
