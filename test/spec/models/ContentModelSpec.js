
define(['js/models/contentmodel'], function(Model) {
  
    var model = new Model();
  
    describe('ContentModel', function() {
        it('onePlusOneTest()', function() {
            expect(model.onePlusOneTest(1, 1)).toEqual(2);
        });
    });
});