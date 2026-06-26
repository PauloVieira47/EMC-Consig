export function onlyDigits(s) {
  return String(s || '').replace(/\D/g, '')
}

export function maskPhone(value) {
  const d = onlyDigits(value).slice(0, 11)
  if (d.length === 0) return ''
  if (d.length <= 2) return `(${d}`
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export function validPhoneBR(raw) {
  let d = onlyDigits(raw)
  if (d.startsWith('55') && d.length >= 12) d = d.slice(2)
  if (d.length < 10 || d.length > 11) return false
  const ddd = parseInt(d.slice(0, 2), 10)
  return ddd >= 11 && ddd <= 99
}

export function waNumberBR(raw) {
  let d = onlyDigits(raw)
  if (d.startsWith('55') && d.length >= 12) return d
  return `55${d}`
}
