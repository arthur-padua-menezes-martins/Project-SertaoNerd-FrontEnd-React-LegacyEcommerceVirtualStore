import { fetchInfo } from './fetch'

const getBaseInfo = (calls = [], ctx) => {
  return Promise.all([

    ...calls.map(action => fetchInfo(action, ctx))

  ])
}

export default getBaseInfo
