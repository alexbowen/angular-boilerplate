var World = function World(callback) {
  this.phantom = require('phantom-proxy');
  this.stuff = 'world';
  this.visit = function(url, callback) {
    //this.browser.visit(url, callback);
    callback();
  };

  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};
exports.World = World;