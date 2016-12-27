function generateMultiplicationTable(n) {
  var res = ['\n']
  for(var row = 1; row <= n; row++) {
    for(var col = 1; col <= row; col++) {
      res.push(`${col}*${row}=${row*col} `)
    }
    res.push('\n')
  }
  return res.join('')
}
/*
generateMultiplicationTable()
1*1=1
1*2=2 2*2=4
1*3=3 2*3=6 3*3=9
1*4=4 2*4=8 3*4=12 4*4=16
1*5=5 2*5=10 3*5=15 4*5=20 5*5=25
*/