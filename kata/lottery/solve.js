var names = ['路飞', '香克斯', '白胡子', '娜美', '乔巴', '乌所普']
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

  console.log(lottery(names, 3))
  console.log(lottery(names, 3))
  console.log(lottery(names, 3))
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

  console.log(lottery(names, 3))
  console.log(lottery(names, 3))
  console.log(lottery(names, 3))
}
