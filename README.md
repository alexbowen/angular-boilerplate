Deer Hunter Webapp
==================

[![Greenkeeper badge](https://badges.greenkeeper.io/alexbowen/angular-boilerplate.svg)](https://greenkeeper.io/)

A bare bones angular JS SPA that uses the following Javascript Dependencies:

- Angular
- RequreJS
- Karma testrunner
- Jasmine
- Protractor / Selenium

Running the app locally
-----------------------

You can run either app from a node web server runing on localhost, from the scripts folder of the app you wish to run:

```node web-server [production|development (default)] ```

then the application is viewable in a browser at

```localhost:8000 ```

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
2. Run protractor e2e and jasmine unit tests. Phantomjs is also available so we can run headless browser tests. These can also be ran from a browser window if needed ```http://localhost:8000/test/e2e/runner.html ``` .When running the e2e tests locally the localhost node webserver must be running for the evnvironment you want to test
3. Run jasmine unit tests
4. Run jshint to lint all the application javascript files
5. Run requirejs optimizer against all application css
6. Run requirejs optimizer against all application javascript
7. copy static assets from development to production
7. copy production config from to environment.js

so we can run 3 commands from the terminal:

- ```grunt --app name ``` build all (default) - steps 1-6 above
- ```grunt test --app name ``` build test - steps 2,3 above
- ```grunt protractor --app name ``` build test - steps 2,4 above
- ```grunt build --app name ``` build CSS - step 1,5,6 above

all above default to the node package name in no app name is passed

running ```grunt build ``` will minify and concatenate all files and place them in a production folder (auto created) with the same structure as the development folder. The javascript build will also analyse all js dependencies from require modules or packages and optimize them so scripts are loaded in the correct order and not duplicated in the built files

Setting up a standalone selenium server
---------------------------------------------------

WebdriverJS does not natively include the selenium server - you must start a standalone selenium server. All you need is the latest [selenium-server-standalone.](https://code.google.com/p/selenium/downloads/list). To drive individual browsers, you may need to install separate driver binaries.

To use with chrome browsers, [download chromedriver](http://chromedriver.storage.googleapis.com/index.html).
[More information about chromedriver](https://sites.google.com/a/chromium.org/chromedriver/)

The `webdriver-manager` script is included in the npm package to manage downloads for you. To see the options, run

    npm install -g protractor
    webdriver-manager

Download and start the selenium server with

    webdriver-manager update
    webdriver-manager start

