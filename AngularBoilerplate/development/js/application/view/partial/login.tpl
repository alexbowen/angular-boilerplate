<section class="login" ng-show="showLogin">
    <form class="login-form" ng-show="showEnter" name="enter" ng-submit="authenticate()">
        <a href="#" class="header">Sign in</a>
        <fieldset>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" tabindex="1" ng-model="user.name" autocomplete="off" required>

            <label for="password">Password<a href="#" title="Forgot?" class="pull-right" ng-click="changeState()" tabindex="5">Forgot?</a></label>
            <input type="password" name="password" autocomplete="off" id="password" tabindex="2" ng-model="user.pass" required>

            <label class="checkbox"><input type="checkbox" tabindex="3" ng-model="user.remember" />Remember me</label>
            <input type="submit" class="btn btn-primary btn-block" tabindex="4" value="sign in" ng-disabled="!enter.$valid">
        </fieldset>
    </form>

    <form class="login-form" ng-show="showForgot" name="forgot" ng-submit="resetRequest()">
        <a href="#" class="header">Forgot password</a>
        <fieldset>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" tabindex="1" ng-model="user.name" autocomplete="off" required>

            <label for="cancel"><a href="#" id="cancel" class="pull-right" ng-click="changeState()" tabindex="5">Cancel</a></label>
            <input type="submit" class="btn btn-primary btn-block" tabindex="4" value="submit" ng-disabled="!forgot.$valid">
        </fieldset>
    </form>

    <span class="error">{{error}}</span>
</section>

