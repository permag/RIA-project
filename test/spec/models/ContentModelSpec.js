
define(['js/models/contentmodel'], function(Model) {

	describe('ContentModel', function() {
		
		var model = new Model();
		
		it('onePlusOneTest(1, 1)', function() {
			expect(model.onePlusOneTest(1, 1)).toEqual(2);
		});
		
		it('onePlusOneTest(1, 100)', function() {
			expect(model.onePlusOneTest(1, 100)).toEqual(101);
		});

	});
});