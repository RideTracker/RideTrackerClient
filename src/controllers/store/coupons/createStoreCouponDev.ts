import Client, { DefaultResponse } from "../../..";

export type CreateStoreCouponDevResponse = DefaultResponse & {
    coupon: {
        token: string;
    };
};

export async function createStoreCouponDev(client: Client, product: string): Promise<CreateStoreCouponDevResponse> {
    const url = new URL(`${client.host}/api/store/coupons/dev`);

    const body = {
        product
    };

    return Client.request(client, "POST", url, undefined, JSON.stringify(body));
};
