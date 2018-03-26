#  Web 前端练习题
练习题选自[CodeWar](http://www.codewars.com/)。    
其中每个练习均有以下的目录结构
* `README.md` 问题的描述（CodeWar上的描述，只是拷贝过来）
* `solve.md` 问题的解决的思路
* `solve.js` 问题的解决方案
* `test.html` 对解决方案的测试

本项目用的测试库
* [mocha](http://mochajs.org/) 测试框架
* [Chai](http://chaijs.com/guide/styles/#should) 断言库。本项目用的是[Should.js](http://shouldjs.github.io/)风格的。
* [Sinonjs](http://sinonjs.org/) 一个做 `Mock` 和 `Stub` 的库

## JavaScript 练习题
* String
  * [字符串转数字类型](kata/string-to-number)
  * [从开头或末尾取字符串的子字符串](kata/left$-right$)
* Control Flow(控制流)
  * [Complete The Pattern #7 - Cyclical Permutation](kata/cyclical-permutation) 周期性排列
  * [第2333个能被2或者被3整除的正整数是多少](kata/2333/solve.js)
* Array
	* [预填充数组](kata/prefill)
  * [随机获奖名单](kata/lottery)
  * [扁平的分类，转化为树形结构的分类](kata/category)
* 其他
  * [兔子生兔子的问题](kata/rabbit-problem)
  * [解析 lisp 风格的运算](kata/parse-lisp-like-op)

## 关于 Kata
Kata是一个日语，意思大体上是日本武术的套路。    
Coding Kata 是一种练习编程能力的一种方法，它要求程序员在拿到一个简单的问题以后进行重复的编码。比如说，第一次快速的按照需求写出来了能工工作的程序，然后抛弃可以工作的第一个版本，重头开始第二轮的编码，然后进行第三次。如果Coding Kata只是这样子重复打代码的话除了练习打字以外那么没有任何意义了，这个方法的根本目的就是为了练习者不断的体挑战自己，跳出自己的舒适区，从而提高自己。


