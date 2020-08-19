import { atom } from 'recoil'

/**
 * @typedef {*} Config
 */

/**
 * Create Atom Recoil
 * @param {Config} config
 * @return {Config}
 */
export const createAtom = (config) => {
  const atomObject = {}
  Object.keys(config).forEach(key => {
    atomObject[key] = atom({ key, default: config[key] })
  })
  return atomObject
}