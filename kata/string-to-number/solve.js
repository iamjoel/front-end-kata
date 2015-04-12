(function() {
    var stringToNumber = function(str) {
        return Number(str);
    }

    this.stringToNumber = stringToNumber;// 暴露到全局作用域。是为了测试。
})(this);
