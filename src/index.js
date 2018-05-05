/* eslint-disable */
import  '@/css/index.scss'
import Vue from '@/core'

const vm = new Vue({
  data () {
    return {
      a: 3
    }
  }
})
window.vm = vm
console.log(vm)
