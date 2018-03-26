# 扁平的分类，转化为树形结构的分类
将这样的数据
```
[{
  name: '食物',
  level: 1,
  id: 1
},{
  name: '饮料',
  level: 1,
  id: 2
},{
  name: '猪肉',
  level: 2,
  id: 1,
  parent: 1,
},{
  name: '牛肉',
  level: 2,
  id: 2,
  parent: 1,
},{
  name: '可乐',
  level: 2,
  id: 3,
  parent: 2,
},]
```
转化为这样的
``` 
[{
  value: 1
  label: '食物',
  children: [{
    value: 1
    label: '猪肉',
  },{
    value: 2
    label: '牛肉',
  }]
}, {
  value: 2
  label: '饮料',
  children: [{
    value: 3
    label: '可乐',
  }]
}]
```