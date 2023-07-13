import Client from "../../..";
import { DefaultResponse } from "../../../models/DefaultResponse";

export async function createPollAnswer(client: Client, pollId: string, inputId: string, answer: string): Promise<DefaultResponse> {
    const url = new URL(`${client.host}/api/polls/${pollId}/inputs/${inputId}/answer`);

    const body = {
        answer
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
