import { ping } from "./controllers/ping";

import * as AuthClient from "@ridetracker/authclient";

export function createRideTrackerClient(userAgent: string, host: string, token: AuthClient.AuthClientToken): RideTrackerClient {
    return AuthClient.createAuthClient(userAgent, host, token);
};

export default class RideTrackerClient extends AuthClient.AuthClient {
    static networkStatus: "UNKNOWN" | "ONLINE" | "OFFLINE" = "UNKNOWN";

    static pingTimer: NodeJS.Timer | null = null;

    static async request(client: RideTrackerClient, method: AuthClient.RequestMethod, url: URL, initialHeaders?: Record<string, string>, body?: BodyInit | undefined): Promise<any> {
        return new Promise((resolve, reject) => {
            if(RideTrackerClient.networkStatus === "OFFLINE" && !url.toString().includes("/api/ping"))
                return resolve({ success: false });

            super.request(client, method, url, initialHeaders, body).then(async (response) => {
                if(this.networkStatus !== "ONLINE") {
                    this.networkStatus = "ONLINE";

                    this.events.filter((event) => event.event === "NETWORK_STATUS").forEach((event) => {
                        event.callback();
                    });
                }

                if(response.status !== 200)
                    throw new Error("Unexpected HTTP error, status code " + response.status + " " + response.statusText + "\nBody: " + (await response.text()));
            
                const result = await response.json();

                resolve(result);
            }).catch((error: any) => {
                console.error(error);

                if(typeof(error) === "string" && error.startsWith("Unexpected HTTP error"))
                    return resolve({ success: false });

                if(this.networkStatus !== "OFFLINE") {
                    this.networkStatus = "OFFLINE";

                    this.events.filter((event) => event.event === "NETWORK_STATUS").forEach((event) => {
                        event.callback();
                    });

                    this.ping(client);
                }

                reject(error);
            });
        });
    };

    static ping(client: RideTrackerClient) {
        if(this.pingTimer !== null)
            return;

        this.pingTimer = setInterval(async () => {
            try {
                await ping(client);

                if(this.pingTimer !== null) {
                    clearInterval(this.pingTimer);

                    this.pingTimer = null;
                }
            }
            catch {
                console.log("Ping failed, trying again in 5 seconds...");
            }
        }, 15000);
    };

    static events: {
        event: "NETWORK_STATUS" | "CONSECUTIVE_PING_FAILED";
        callback: () => void;
    }[] = [];

    static addEventListener(event: "NETWORK_STATUS" | "CONSECUTIVE_PING_FAILED", callback: () => void) {
        return this.events.push({
            event, callback
        }) - 1;
    };

    static removeEventListener(listener: number) {
        this.events.splice(listener, 1);
    };
};

export * from "./models/DefaultResponse";

export * from "./controllers/ping";
export * from "./controllers/getStatus";
export * from "./controllers/messages/createMessage";
export * from "./controllers/activities/getActivityById";
export * from "./controllers/activities/createActivity";
export * from "./controllers/activities/updateActivity";
export * from "./controllers/activities/deleteActivity";
export * from "./controllers/activities/comments/updateActivityComment";
export * from "./controllers/activities/comments/getActivityComment";
export * from "./controllers/activities/comments/getActivityComments";
export * from "./controllers/activities/comments/deleteActivityComment";
export * from "./controllers/activities/comments/createActivityComment";
export * from "./controllers/activities/comments/summaries/getActivityCommentsSummary";

export * from "./controllers/routes/createRoute";
export * from "./controllers/routes/feed/getRoutesByFeed";
export * from "./controllers/routes/feed/getRoutesByUserFeed";

export * from "./controllers/devices/createDevice";
export * from "./controllers/devices/getDevices";

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
export * from "./controllers/profiles/follows/setUserFollow";
export * from "./controllers/profiles/getProfileById";
export * from "./controllers/user/deleteUser";
export * from "./controllers/user/avatars/uploadUserAvatar";
export * from "./controllers/user/follows/getUserFollowersByFeed";
export * from "./controllers/user/follows/getUserFollowingByFeed";
export * from "./controllers/auth/getRandomToken";
export * from "./controllers/store/getStoreProducts";
export * from "./controllers/store/subscriptions/createStoreSubscription";
export * from "./controllers/store/coupons/createStoreCouponDev";
export * from "./controllers/polls/getPoll";
export * from "./controllers/polls/answers/createPollAnswer";
