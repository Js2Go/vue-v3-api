import request from '../utils/request'

export const register = data => {
  request({
    url: '/register',
    method: 'post',
    data
  })
}
