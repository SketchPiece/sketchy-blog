import md5 from 'js-md5'
const GRAVATAR_API = 'https://www.gravatar.com/avatar/'

export const getEmailAvatar = (email: string = '') => {
  const hash = md5(email)
  return `${GRAVATAR_API}${hash}?d=mp`
}
