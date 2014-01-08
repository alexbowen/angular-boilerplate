/*global browser sleep element describe beforeEach it expect */

(function() {
'use strict';

	describe('Angular Boilerplate', function() {

		it('page title should be Angular Boilerplate', function() {
			browser().navigateTo('/');
            sleep(1);
			expect(element('h1').text()).toBe("Angular Boilerplate");
		});

		it('page content should be hello world', function() {
			expect(element('#page-holder p').text()).toBe("Hello World!");
		});
	});
})();