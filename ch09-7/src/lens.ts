import * as R from 'ramda'

export const makeLens: (string) => R.Lens<any, any> = propName => R.lens(R.prop(propName), R.assoc(propName))

export const getter = (lens: R.Lens<any, any>) => R.view(lens)
export const setter = (lens: R.Lens<any, any>) => <T>(newValue: T) => R.set(lens, newValue)
export const setterUsingFunc = (lens: R.Lens<any, any>) => <T, R>(func: (T) => R) => R.over(lens, func)