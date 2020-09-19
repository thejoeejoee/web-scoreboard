// @ts-ignore
import {NowRequest, NowResponse} from '@vercel/node'
import Request from "request";

export default async (request: NowRequest, response: NowResponse) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    let url = request.body.url;

    if (!url) {
        response.status(400).send(null);
        return;
    }

    // TODO: check origin of target URL

    Request.get(url).pipe(response)
}
