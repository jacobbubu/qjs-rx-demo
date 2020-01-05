import { setTimeout, clearTimeout } from 'os'

const getIntervalKey = (function() {
  let counter = 0

  return function() {
    return '__INTERVAL-' + counter++
  }
})()

const intervalTimeouts = {}

function setInterval(func, interval, ...args) {
  const loop = function() {
    if (typeof func === 'function') {
      func.apply(this, args)
    }
    const exists = !!intervalTimeouts[timeoutKey]

    if (!exists) {
      return
    }

    const newTimeout = setTimeout(loop, interval)

    intervalTimeouts[timeoutKey] = newTimeout
  }
  const timeout = setTimeout(loop, interval)
  const timeoutKey = getIntervalKey()
  intervalTimeouts[timeoutKey] = timeout
  return timeoutKey
}

function clearInterval(timeoutKey) {
  const exists = intervalTimeouts[timeoutKey]
  if (exists) {
    delete intervalTimeouts[timeoutKey]
    return clearTimeout(exists)
  }
}

globalThis.process = { env: { NODE_EMV: 'development' } }
globalThis.console.warn = console.log
globalThis.setTimeout = setTimeout
globalThis.setInterval = setInterval
globalThis.clearInterval = clearInterval
