import Dep from './dep'

export function observe (value) {
  let ob
  ob = new Observer(value)
  return ob
}

export class Observer {
  // 传入参数，data对象
  constructor (value) {
    this.value = value
    this.dep = new Dep()

    this.walk(value)
  }
  walk (obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }
}

export function defineReactive (obj, key, val) {
  const dep = new Dep()
  val = obj[key]
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = val
      if (Dep.target) {
        dep.depend()
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      if (newVal === val) {
        return
      }
      val = newVal
      dep.notify()
    }
  })
}
