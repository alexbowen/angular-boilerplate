(function() {
'use strict';

    describe('Deer Hunter', function() {

        var ptor = protractor.getInstance();

        beforeEach(function() {
            ptor.driver.get('http://localhost:8000')
            ptor.sleep(1000);
        });

        it('page title should be Status Report', function() {
           ptor.getTitle().then(function(title) {
               expect(title).toBe('Angular Boilerplate');
           });
        });
    });
})();