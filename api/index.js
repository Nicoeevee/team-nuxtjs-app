import request from './request'

export function Test1(query) {
  return request({
    url: 'article/findAll',
    method: 'get',
    params: query
  })
}
