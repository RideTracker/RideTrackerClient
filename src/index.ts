import { Method } from "./models/Method";

export default class Client {
    host: string;
    token?: string;

    constructor(host: string, token?: string) {
        this.host = host;
        this.token = token;
    };

    async request(method: Method, url: URL, initialHeaders?: Record<string, string>, body?: BodyInit | undefined) {
        const headers: Record<string, string> = {
            ...initialHeaders
        };

        if(this.token)
            headers["Authorization"] = `Bearer ${this.token}`;

        if(body)
            headers["Content-Type"] = "application/json";

        const response = await fetch(url.toString(), {
            method,
            headers,
            body
        });

        if(response.status !== 200)
            throw new Error("Unexpected HTTP error, status code " + response.status);
        
        const result = await response.json();

        return result;
    };
};

export { Method };
export * from "./models/DefaultResponse";

export * from "./controllers/ping";
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
export * from "./controllers/profiles/activities/getProfileActivities";
export * from "./controllers/profiles/bikes/getProfileBikes";
export * from "./controllers/profiles/getProfileById";
export * from "./controllers/user/avatars/uploadUserAvatar";
export * from "./controllers/auth/getRandomToken";
