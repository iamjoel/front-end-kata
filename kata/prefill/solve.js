(function (global) {
	function prefill(n, v){
		var res = [];
		if(n !== undefined){
			if(/^\d+$/.test(n) && isFinite(n)){// n必须是正整数
				n = parseInt(n, 10);
				for(var i = 0; i < n; i++){
					res.push(v);
				}

			} else {
				throw TypeError(n + ' is invalid');
			}
		}
		return res;
	}

	global.prefill = prefill;
})(this);