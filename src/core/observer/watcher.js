
import Dep, { pushTarget, popTarget } from './dep'

let uid = 0
/**
 * 相当于早期版本的Directive指令对象，解析dom对象的时候才会生成一个指令哦，vm上的值变化，Directive要执行对象更新，所以更名为watcher也算合理，订阅Dep
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
export default class Watcher {
  constructor () {
  }
}
