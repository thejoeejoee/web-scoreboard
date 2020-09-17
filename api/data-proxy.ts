// @ts-ignore
import {NowRequest, NowResponse} from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => {
    const {name = 'World'} = request.query
    response.setHeader('Access-Control-Allow-Origin', response.headers.origin);
    response.status(200).send(JSON.stringify({data: `Hello ${name}!`}))
}
