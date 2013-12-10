/*global browser sleep element describe beforeEach it expect */

(function() {
'use strict';

	describe('Transform admin', function() {
		beforeEach(function() {
			browser().navigateTo('/');
			sleep(1);
		});


		it('should automatically redirect to /#/ when location hash/fragment is empty', function() {
			expect(browser().location().url()).toBe("/");
		});

		describe('users', function() {
			beforeEach(function() {
				browser().navigateTo('/#/users');
				sleep(1);
			});

			it('should...', function() {
                expect(browser().location().url()).toBe("/users");
			});
		});
	});

})();