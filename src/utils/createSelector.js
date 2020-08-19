import { selector } from 'recoil'

/**
 * @typedef {*} Config
 */

/**
 * Create Selector Recoil
 * @param {Config} config
 * @return {Config}
 */
export const createSelector = (config) => {
  const selectorObject = {}
  Object.keys(config).forEach(key => {
    selectorObject[key] = selector({ key, get: config[key] })
  })
  return selectorObject
}