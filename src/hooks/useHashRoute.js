import { useSyncExternalStore } from 'react'

function subscribe(callback) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

function getHash() {
  return window.location.hash || '#/'
}

export function useHashRoute() {
  return useSyncExternalStore(subscribe, getHash, () => '#/')
}
