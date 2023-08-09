import Client from "../..";
import { DefaultResponse } from "../../models/DefaultResponse";
import { Recording } from "@ridetracker/ridetrackertypes";

export type CreateActivityResponse = DefaultResponse & {
    activity: {
        id: string;
    };
};

export async function createActivity(client: Client, recording: Recording, visibility: string): Promise<CreateActivityResponse> {
    const url = new URL(`${client.host}/api/activities/create`);

    const body = {
        recording,
        visibility
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
