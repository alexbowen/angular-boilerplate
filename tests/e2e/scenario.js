/*global browser sleep element describe beforeEach it expect */

(function() {
'use strict';

	describe('Deer Hunter', function() {
		beforeEach(function() {
			browser().navigateTo('/development/');
			sleep(1);
		});

		it('page title should be Deer Hunter', function() {
			expect(element('h1').text()).toBe("Deer Hunter");
		});

		it('page title should be Deer Hunter', function() {
			expect(element('#page-holder p').text()).toBe("Hello World!");
		});
	});
})();