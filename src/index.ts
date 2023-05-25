import { Method } from "./models/Method";

import ping from "./controllers/ping";
import getActivityById from "./controllers/activities/getActivityById";
import createActivity from "./controllers/activities/createActivity";
import getActivitySummary from "./controllers/activities/summaries/getActivitySummary";
import updateActivityComment from "./controllers/activities/comments/updateActivityComment";
import getActivityComments from "./controllers/activities/comments/getActivityComments";
import deleteActivityComment from "./controllers/activities/comments/deleteActivityComment";
import createActivityComment from "./controllers/activities/comments/createActivityComment";
import getActivityCommentsSummary from "./controllers/activities/comments/summaries/getActivityCommentsSummary";
import loginUser from "./controllers/auth/loginUser";
import registerUser from "./controllers/auth/registerUser";
import verifyLogin from "./controllers/auth/verification/verifyLogin";
import getVerificationCode from "./controllers/auth/verification/getVerificationCode";
import createBike from "./controllers/bikes/createBike";
import getBike from "./controllers/bikes/getBike";
import getBikes from "./controllers/bikes/getBikes";
import getFeed from "./controllers/feed/getFeed";
import getProfileActivities from "./controllers/profiles/activities/getProfileActivities";
import getProfileBikes from "./controllers/profiles/bikes/getProfileBikes";
import getProfileById from "./controllers/profiles/getProfileById";
import uploadUserAvatar from "./controllers/user/avatars/uploadUserAvatar";

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

export {
    ping,
    getActivityById,
    createActivity,
    getActivitySummary,
    updateActivityComment,
    getActivityComments,
    deleteActivityComment,
    createActivityComment,
    getActivityCommentsSummary,
    loginUser,
    registerUser,
    verifyLogin,
    getVerificationCode,
    createBike,
    getBike,
    getBikes,
    getFeed,
    getProfileActivities,
    getProfileBikes,
    getProfileById,
    uploadUserAvatar
};
