import Client from "../..";
import { ActivitySummaryKey } from "../../models/ActivitySummaryKey";
import { DefaultResponse } from "../../models/DefaultResponse";

export type GetPollResponse = DefaultResponse & {
    poll: {
        id: string;
        title: string;
        description?: string;
        timestamp: number;

        inputs: {
            id: string;
            title: string;
            type: "string" | "grade" | "list";
            choices?: string;
            index: number;
        }[];

        answers: {
            id: string;
            input: string;
            answer: string;
            timestamp: number;
        }[];
    };
};

export async function getPoll(client: Client, pollId: string): Promise<GetPollResponse> {
    const url = new URL(`${client.host}/api/polls/${pollId}`);

    return Client.request(client, "GET", url);
};
