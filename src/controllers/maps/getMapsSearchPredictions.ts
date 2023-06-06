import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";
import { PlaceAutocompletePrediction } from "../../models/PlaceAutocompletePrediction";

export type GetMapsSearchPredictionsResponse = DefaultResponse & {
    predictions: PlaceAutocompletePrediction[];
};

export async function getMapsSearchPredictions(client: Client, search: string): Promise<GetMapsSearchPredictionsResponse> {
    const url = new URL(`${client.host}/api/maps/search`);
    url.searchParams.append("search", search);

    return client.request("GET", url);
};
