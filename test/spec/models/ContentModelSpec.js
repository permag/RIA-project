
define(['js/models/contentmodel'], function(ContentModel) {

	describe('A Content Model', function() {
		var content = new ContentModel();
		
		it('should be able to create object instance', function() {
			expect(content).toBeDefined();
		});

	});
});
