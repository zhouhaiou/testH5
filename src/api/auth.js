import request from '@/utils/request'

export const apply = () => {
  const data = {
    tenancy_name: 'xyz',
    username: 'admin',
    password: 'yk123456'
  }

  return request({
    url: '/auth/token',
    data,
    method: 'post'
  })
}