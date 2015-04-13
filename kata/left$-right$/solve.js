(function(global) {
    // substring(start, end)
    var left$ = function(str, i) {
        var start = 0;
        var end;
        i = (i === undefined) ? 1 : i;
        if (typeof i === 'string') {
            end = str.indexOf(i);
        } else if (!isNaN(parseInt(i, 10))) {
            end = parseInt(i, 10);
            if (end < 0) {
                end = str.length + end;
            }
        } else {
            throw 'not support param i type：'+ (typeof i);
        }
        return str.substring(start, end);
    };

    var right$ = function(str, i) {
        var start;
        var end = str.length;
        // 不指定i。返回最后一位
        if (i === undefined) {
            return str.substr(-1);
        }
        if (typeof i === 'string') {
            start = str.lastIndexOf(i) + i.length;// 子字符串可能超过1位
        } else if (!isNaN(parseInt(i, 10))) {
            if (i < 0) {
                start = -i;
            } else {
                start = str.length - parseInt(i, 10);
            }
        } else {
            throw 'not support param i type：'+ (typeof i);
        }
        return str.substring(start);
    }

    global.left$ = left$;
    global.right$ = right$;
})(this);
