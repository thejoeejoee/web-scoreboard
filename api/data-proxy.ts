// @ts-ignore
import {NowRequest, NowResponse} from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => {
    const {name = 'World'} = request.query
    response.status(200).send(JSON.stringify({data: `Hello ${name}!`}))
}
