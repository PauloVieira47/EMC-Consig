import { onlyDigits } from '@/lib/phone'

export function validarCPF(cpf) {
  const digits = onlyDigits(cpf)
  if (digits.length !== 11) return false
  if (/^(\d)\1{10}$/.test(digits)) return false

  let add = 0
  for (let i = 0; i < 9; i++) add += parseInt(digits.charAt(i), 10) * (10 - i)
  let rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(digits.charAt(9), 10)) return false

  add = 0
  for (let i = 0; i < 10; i++) add += parseInt(digits.charAt(i), 10) * (11 - i)
  rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) rev = 0
  return rev === parseInt(digits.charAt(10), 10)
}

export function maskCPF(value) {
  const d = onlyDigits(value).slice(0, 11)
  if (d.length <= 3) return d
  if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`
  if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`
  return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`
}
