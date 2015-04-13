(function(global) {
    var stringToNumber = function(str) {
        return Number(str);
    }

    global.stringToNumber = stringToNumber;// 暴露到全局作用域。是为了测试。
})(this);
