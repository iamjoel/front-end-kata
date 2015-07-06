(function(global) {
    function pattern(n) {
        var output = "";
        if (n !== undefined && typeof n === 'number' && n > 0) {
            var arr = [];
            var i = 0;
            output = [];
            for (i = 0; i < n; i++) {
                arr.push(i + 1);
            }
            for (i = 0; i < n; i++) {
                output.push(arr.join(''));
                arr.push(arr.shift());
            }
            output = output.join('\n');

        }
        return output;
    }

    global.pattern = pattern;
})(this);
