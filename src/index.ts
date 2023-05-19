type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type DefaultResponse = {
    success: boolean;
    message?: string;
};

export default class Client {
    host: string;
    token?: string;

    constructor(host: string, token?: string) {
        this.host = host;
        this.token = token;
    };

    async request(method: RequestMethod, url: URL, initialHeaders?: Record<string, string>, body?: BodyInit | undefined) {
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
