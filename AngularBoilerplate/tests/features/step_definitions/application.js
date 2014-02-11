var applicationWrapper = function () {
  	this.World = require("../support/world.js").World; // overwrite default World constructor

	this.Given(/^I am on the Deer Hunter application$/, function(callback) {

		this.visit('localhost:8000/development', callback);
		// express the regexp above with the code you wish you had
		callback.pending();
	});

	this.When(/^I go to the Home Page$/, function(callback) {
	  // express the regexp above with the code you wish you had
	  callback.pending();
	});

	this.Then(/^I should see "([^"]*)" as the page title$/, function(title, callback) {
	  // express the regexp above with the code you wish you had
	  // 
	  
	  var pageTitle = this.browser.text('title');
	    if (title === pageTitle) {
	      callback();
	    } else {
	      callback.fail(new Error("Expected to be on page with title " + title));
	    }
	  callback.pending();
	});
};

module.exports = applicationWrapper;
