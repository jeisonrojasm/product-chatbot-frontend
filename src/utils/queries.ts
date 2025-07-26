import { request } from './request'

export const loginUser = (
  body: object
) => {
  return request({
    method: 'POST',
    endpoint: '/auth/login',
    body
  })
}

export const postMessage = (
  body: object,
) => {
  return request({
    method: 'POST',
    endpoint: '/chat',
    body
  })
}
