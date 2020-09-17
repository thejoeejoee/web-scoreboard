// @ts-ignore
import {NowRequest, NowResponse} from '@vercel/node'
import Axios from "axios";

export default async (request: NowRequest, response: NowResponse) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    let url = request.body.url;

    if (!url) {
        response.status(400).send();
        return;
    }

    // TODO: check origin of target URL
    let data = (await Axios.get(url)).data;

    response.status(200).send(JSON.stringify(data))
}
