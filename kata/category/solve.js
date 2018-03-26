function format(arr) {
  var categorys = []

  arr.forEach(category => {
    if(category.level == 1) {
      categorys.push({
        value: category.id,
        label: category.name,
        children: arr
          .filter(subCategory => subCategory.level == 2 && subCategory.parent == category.id)
          .map(subCategory => {
            return {
              value: subCategory.id,
              label: subCategory.name
            }
          })
      })
    }
  })

  return categorys
}