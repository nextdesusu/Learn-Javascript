function pow(x, n){
	if (n == 0){
		return 1;
	}
	var res = x;
	for (var i = 1; i < Math.abs(n); i++){
		res *= x;
	}
	if (n > 0){
		return res;
	}
	return 1/res;
}

//Tests

describe("pow", function(){
	it('Возвести число в степень n, где n >= 0', function(){
		assert.equal(pow(0, 1), 0);
		assert.equal(pow(1, 1), 1);
		assert.equal(pow(2, 2), 4);
		assert.equal(pow(2, 3), 8);
		assert.equal(pow(3, 2), 9);
		assert.equal(pow(10, 0), 1);
	});
	
	it('Возвести число в степень n, где n < 0', function(){
		assert.equal(pow(10, -1), 0.1);
		assert.equal(pow(8, -1), 0.125);
	});
	
});