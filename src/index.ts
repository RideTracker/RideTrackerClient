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

export { default as ping } from "./controllers/ping";
export { default as getActivityById } from "./controllers/activities/getActivityById";
export { default as createActivity } from "./controllers/activities/createActivity";
export { default as getActivitySummary } from "./controllers/activities/summaries/getActivitySummary";
export { default as updateActivityComment } from "./controllers/activities/comments/updateActivityComment";
export { default as getActivityComments } from "./controllers/activities/comments/getActivityComments";
export { default as deleteActivityComment } from "./controllers/activities/comments/deleteActivityComment";
export { default as createActivityComment } from "./controllers/activities/comments/createActivityComment";
export { default as getActivityCommentsSummary } from "./controllers/activities/comments/summaries/getActivityCommentsSummary";
export { default as loginUser } from "./controllers/auth/loginUser";
export { default as registerUser } from "./controllers/auth/registerUser";
export { default as verifyLogin } from "./controllers/auth/verification/verifyLogin";
export { default as createBike } from "./controllers/bikes/createBike";
export { default as getBike } from "./controllers/bikes/getBike";
export { default as getBikes } from "./controllers/bikes/getBikes";
export { default as getFeed } from "./controllers/feed/getFeed";
export { default as getProfileActivities } from "./controllers/profiles/activities/getProfileActivities";
export { default as getProfileBikes } from "./controllers/profiles/bikes/getProfileBikes";
export { default as getProfileById } from "./controllers/profiles/getProfileById";
export { default as uploadUserAvatar } from "./controllers/user/avatars/uploadUserAvatar";
