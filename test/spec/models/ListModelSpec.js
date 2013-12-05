
define(['js/models/listmodel'], function(ListModel) {

	describe('A List Model', function() {
		
		var list = new ListModel();
		
		it('should be able to create object instance', function() {
			expect(list).toBeDefined();
		});

	});
});