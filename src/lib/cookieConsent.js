import { readCookie, writeCookie } from '@/lib/cookies'

export const CONSENT_COOKIE = 'nn_cookie_consent'

export const defaultPreferences = {
  essential: true,
  analytics: false,
  marketing: false,
}

export function parseConsent(raw) {
  if (!raw) return null
  try {
    const parsed = JSON.parse(decodeURIComponent(raw))
    return {
      essential: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      choice: parsed.choice || 'essential',
    }
  } catch {
    if (raw === 'accepted') {
      return { ...defaultPreferences, analytics: true, marketing: true, choice: 'all' }
    }
    if (raw === 'essential') {
      return { ...defaultPreferences, choice: 'essential' }
    }
    return null
  }
}

export function getConsent() {
  return parseConsent(readCookie(CONSENT_COOKIE))
}

export function saveConsent(preferences) {
  const payload = {
    essential: true,
    analytics: Boolean(preferences.analytics),
    marketing: Boolean(preferences.marketing),
    choice: preferences.choice || 'custom',
    updatedAt: Date.now(),
  }
  writeCookie(CONSENT_COOKIE, encodeURIComponent(JSON.stringify(payload)), 365)
  return payload
}

export function hasConsentChoice() {
  return Boolean(getConsent())
}
