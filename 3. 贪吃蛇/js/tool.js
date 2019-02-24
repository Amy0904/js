// 工具对象

;(function (window, undefined) {
  var Tool = {
    getRandom: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  window.Tool = Tool;
})(window)

// 为什么要传window这个参数
// 1 直接在当前作用域找到window
// 2 将来压缩代码的时候，可以把window压缩

// 为什么要传undefined
// 1 有些旧的浏览器 可以给undefined赋值
// 2 将来压缩代码的时候，可以把undefined压缩
