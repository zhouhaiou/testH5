/**
 * 管理用户登录凭证
 */

const TokenKey = 'AUTH-TOKEN'

/**
 * 获取存储器中的用户凭证
 */
export function getToken() {
  return localStorage.getItem(TokenKey)
}

/**
 * 将用户凭证保存到存储器中
 */
export function saveToken(token) {
  // 登录成功后，存储 token
  localStorage.setItem(TokenKey, token)
}

/**
 * 移除用户凭证
 */
export function removeToken() {
  // 登出后移除 token
  localStorage.removeItem(TokenKey)
}