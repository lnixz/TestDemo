class Vue {
  constructor(opt) {
    this.opt = opt || {};
    this.observer(opt.data)
    let root = document.querySelector(opt.el)
    this.compile
  }
  // 为响应式对象 data 里的每一个 key 绑定一个观察者对象
  observer(data) {
    Object.keys(data).forEach(key => {
      let obv = new Observer()
      data['_' + key] = data[key]
      Object.defineProperty(data, key, {
        get() {
          Observer.target && obv.addSubNode(Observer.target)
          return data['_' + key]
        },
        set(newVal) {
          obv.update(newVal)
          data['_' + key] = newVal
        }
      })
    })
  }
  compile(node) {
    [].forEach.call(node.childNodes, child => {
      
    })
  }
}

class Observer {
  constructor() {
    this.subNode = []
  }
  addSubNode(node) {
    this.subNode.push(node)
  }
  update(newVal) {
    this.subNode.forEach(node => {
      node.innerHTML = newVal
    })
  }
}