import request from './request'

export function article_findAll(query) {
  return request({
    url: 'article/findAll',
    method: 'get',
    params: query
  })
}
export const Test2= (data) => {
  return request({
    url: 'article/saveOrUpdate',
    method: 'post',
    data
  })
}
export function epidemic_pageQuery(query) {
  return request({
    url: 'epidemic/pageQuery',
    method: 'get',
    params: query
  })
}
// export function epidemic_Update(data) {
//   return request({
//     url: 'epidemic/saveOrUpdate',
//     method: 'post',
//     params: data
//   })
// }
