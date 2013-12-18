Deer Hunter Webapp
==================

A bare bones angular JS SPA that uses the following Javascript Dependencies:

- Angular
- RequreJS
- Karma

Frontend Application Structure
------------------------------

Files (js/css/assets) are served from either production or development folders. There is a tests folder for javascript unit tests. A folder for documentation is created in the build process (detailed below).

Install bower js dependencies (if not there already) in /development/js/lib

```sudo npm install -g bower ```

```bower install ```

Application build
-----------------

The application is built using node.js, all dependencies are listed in package.json. In the src folder from terminal:

install node.js if not already installed on your machine: ```http://nodejs.org/ ```

To install the local node modules and dependencies needed for the build: ```sudo npm install ```

The build system uses grunt.js. This enables us to define the build in one config file (Gruntfile.js). To run grunt tasks from the command line you will need the global npm package:

```sudo npm install -g grunt-cli ```

For this application we run the following processes and these processes re then run via teamcity to form the CI:

1. Build javascript documentation using yuidoc
2. Run karma e2e and unit tests. Phantomjs is also available so we can run headless browser tests. These can also be ran from a browser window if needed ```http://localhost:8000/test/e2e/runner.html ```
3. Run jshint to lint all the application javascript files
4. Run requirejs optimizer against all application css
5. Run requirejs optimizer against all application javascript
6. copy static assets from development to production

so we can run 3 commands from the terminal:

- ```grunt ``` build all (default) - steps 1-6 above
- ```grunt test ``` build test - steps 2,3 above
- ```grunt build ``` build CSS - step 1,4,5 above

running ```grunt build ``` will minify and concatenate all files and place them in a production folder (auto created) with the same structure as the development folder. The javascript build will also analyse all js dependencies from require modules or packages and optimize them so scripts are loaded in the correct order and not duplicated in the built files
