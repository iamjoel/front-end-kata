// (* (+ 5 3) 2)  => (5+3) * 2
function cal(expr) {
  expr = expr.trim()
  if(/^[0-9.]+$/.test(expr)) {
    return expr
  }
  expr = removeBrackets(expr)
  var op = expr.charAt(0)
  expr = expr.substr(2).trim()
  var splitedNum = splitNum(expr)
  var left = cal(splitedNum.left)
  var right = cal(splitedNum.right)
  // console.log(`${left} ${op} ${right}`)
  return eval(`${left} ${op} ${right}`)
}

function splitNum(expr) {
  // debugger
  // 没有括号，或右操作数中有括号
  if(expr.indexOf('(') === -1 || /^[0-9.]+ \(/.test(expr)) {
    return {
      left: expr.split(/ /)[0],
      right: expr.substr(expr.indexOf(' ')), // 第一个空格之后所有的
    }
  } 
  // 左操作数中有括号,或两个都有括号
  var left
  var right
  var leftBracketIndex = -1
  var rightBracketIndex = 0
  var leftBracketNum = 0
  expr.split('').forEach((char, i) => {
    if(left) {
      return
    }
    if(char === '(') {
      if(leftBracketNum === 0) {
        leftBracketIndex = i
      }
      leftBracketNum++
    } else if(char === ')') { // 闭合符
      leftBracketNum--
      if(leftBracketNum === 0) {
        rightBracketIndex = i
        left = expr.substring(leftBracketIndex, rightBracketIndex + 1)
      }
    }
  })

  right = expr.substr(rightBracketIndex + 2)

  return {
    left,
    right
  }

}

// 去括号
// (* (+ 5 3) 2) => * (+ 5 3) 2
function removeBrackets(expr) {
  if(expr.indexOf('(') === -1) {
    return expr
  }
  var leftBracketIndex = -1
  var rightBracketIndex = 0
  var leftBracketNum = 0
  expr.split('').forEach((char, i) => {
    if(char === '(') {
      if(leftBracketNum === 0) {
        leftBracketIndex = i
      }
      leftBracketNum++
    } else if(char === ')') { // 闭合符
      leftBracketNum--
      if(leftBracketNum === 0) {
        rightBracketIndex = i
      }
    }
    
  })
  return expr.substring(leftBracketIndex + 1, rightBracketIndex)
}