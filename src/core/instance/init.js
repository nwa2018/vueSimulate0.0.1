import { initState } from './state'

export function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    const vm = this

    vm.$options = options

    vm._events = Object.create(null)

    initState(vm)
    // 装在dom
    // vm.$mount(vm.$options.el)
  }
}
