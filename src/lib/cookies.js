/** Mesma lógica de createCookie/readCookie do custom.js original */

export function writeCookie(name, value, days) {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = `; expires=${date.toUTCString()}`
  }
  document.cookie = `${name}=${value}${expires}; path=/`
}

export function readCookie(name) {
  const nameEQ = `${name}=`
  const parts = document.cookie.split(';')
  for (let part of parts) {
    let c = part
    while (c.charAt(0) === ' ') c = c.substring(1)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length)
  }
  return null
}
