import {
  observe
} from '../observer/index'

import {
  noop
} from '@/shared/util'

export function initState (vm) {
  // 这里会初始化很多东西，比如props,methods,computed,watch等等
  initData(vm)
}

function initData (vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function'
    ? data.call(vm, vm)
    : data || {}

  const keys = Object.keys(data)
  let i = keys.length
  while (i--) {
    const key = keys[i]
    // 更改或者设置vm.key的时候，实际修改vm._data.key
    proxy(vm, `_data`, key)
  }
  observe(data, true)
}

const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

export function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
