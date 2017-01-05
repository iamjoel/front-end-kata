var names = ['路飞', '香克斯', '白胡子', '娜美', '乔巴', '乌所普']
var longName = [...names, ...names]
longName = [...longName, ...longName, ...longName]
longName = [...longName, ...longName, ...longName]
longName = [...longName, ...longName, ...longName]
const time = 1000000 // 十万次
const resNum = 3
  // 解法1
; {
  var lottery = (names, num) => {
    names = names.map(item => item)
    var res = []
    for (var i = 0; i < num; i++) {
      let randomIndex = Math.floor(Math.random() * names.length)
      res.push(names.splice(randomIndex, 1)[0])
    }
    return res
  }
  benchmark(() => {
    lottery(names, resNum)
  }, time, '方法1 短数组')
  benchmark(() => {
    lottery(longName, resNum)
  }, time, '方法1 长数组')
  // console.log(lottery(names, 3))
  // console.log(lottery(names, 3))
  // console.log(lottery(names, 3))
}

// 解法2
; {
  var lottery = (names, num) => {
    names = names.map(item => item)
    names.sort((a, b) => {
      return Math.random() > 0.5
    })
    return names.slice(0, 3)
  }

  benchmark(() => {
    lottery(names, resNum)
  }, time, '方法2 短数组')
  benchmark(() => {
    lottery(longName, resNum)
  }, time, '方法2 长数组')

  // console.log(lottery(names, 3))
  // console.log(lottery(names, 3))
  // console.log(lottery(names, 3))
}

// 输出
// 方法1 短数组花了2.089秒
// 方法1 长数组花了45.353秒
// 方法2 短数组花了2.436秒
// 方法2 长数组花了119.705秒

function benchmark(fn, time, name) {
  var start = Date.now()
  for(var i = 0; i < time; i++) {
    fn()
  }
  var end = Date.now()
  var useTime = (end - start) / 1000
  console.log(`${name}花了${useTime}秒`)
}
