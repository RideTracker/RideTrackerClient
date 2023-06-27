import { Method } from "./models/Method";

export default class Client {
    userAgent: string;

    host: string;
    token?: string;

    networkStatus: "UNKNOWN" | "ONLINE" | "OFFLINE" = "UNKNOWN";

    constructor(userAgent: string, host: string, token?: string) {
        this.userAgent = userAgent;

        this.host = host;
        this.token = token;
    };

    static async request(client: Client, method: Method, url: URL, initialHeaders?: Record<string, string>, body?: BodyInit | undefined): Promise<any> {
        const headers: Record<string, string> = {
            ...initialHeaders
        };

        headers["User-Agent"] = client.userAgent;

        if(client.token)
            headers["Authorization"] = `Bearer ${client.token}`;

        if(body)
            headers["Content-Type"] = "application/json";

        return new Promise((resolve, reject) => {
            fetch(url.toString(), {
                method,
                headers,
                body
            }).then(async (response) => {
                if(client.networkStatus !== "ONLINE") {
                    client.networkStatus = "ONLINE";

                    client.events.filter((event) => event.event === "NETWORK_STATUS").forEach((event) => {
                        event.callback();
                    });
                }

                if(response.status !== 200)
                    throw new Error("Unexpected HTTP error, status code " + response.status + " " + response.statusText + "\nBody: " + (await response.text()));
            
                const result = await response.json();

                resolve(result);
            }).catch((error) => {
                console.error(error);

                if(client.networkStatus !== "OFFLINE") {
                    client.networkStatus = "OFFLINE";

                    client.events.filter((event) => event.event === "NETWORK_STATUS").forEach((event) => {
                        event.callback();
                    });
                }

                reject(error);
            });
        });
    };

    events: {
        event: "NETWORK_STATUS";
        callback: () => void;
    }[] = [];

    static addEventListener(client: Client, event: "NETWORK_STATUS", callback: () => void) {
        return client.events.push({
            event, callback
        }) - 1;
    };

    static removeEventListener(client: Client, listener: number) {
        client.events.splice(listener, 1);
    };
};

export { Method };
export * from "./models/DefaultResponse";

export * from "./controllers/ping";
export * from "./controllers/getStatus";
export * from "./controllers/activities/getActivityById";
export * from "./controllers/activities/createActivity";
export * from "./controllers/activities/summaries/getActivitySummary";
export * from "./controllers/activities/comments/updateActivityComment";
export * from "./controllers/activities/comments/getActivityComments";
export * from "./controllers/activities/comments/deleteActivityComment";
export * from "./controllers/activities/comments/createActivityComment";
export * from "./controllers/activities/comments/summaries/getActivityCommentsSummary";
export * from "./controllers/auth/authenticateUser";
export * from "./controllers/auth/loginUser";
export * from "./controllers/auth/registerUser";
export * from "./controllers/auth/verification/verifyLogin";
export * from "./controllers/auth/verification/getVerificationCode";
export * from "./controllers/bikes/createBike";
export * from "./controllers/bikes/getBike";
export * from "./controllers/bikes/getBikes";
export * from "./controllers/feed/getFeed";
export * from "./controllers/maps/getMapsSearchPredictions";
export * from "./controllers/maps/getMapsGeocode";
export * from "./controllers/maps/getMapsRoutes";
export * from "./controllers/profiles/activities/getProfileActivities";
export * from "./controllers/profiles/bikes/getProfileBikes";
export * from "./controllers/profiles/getProfileById";
export * from "./controllers/user/avatars/uploadUserAvatar";
export * from "./controllers/auth/getRandomToken";
