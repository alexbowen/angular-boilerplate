<form name="login" ng-submit="forgot()">
    <a href="#" class="header">Forgot password</a>
    <fieldset>
        <label for="id_username">Email</label>
        <input type="text" name="username" id="id_username" tabindex="1" ng-model="user.name" autocomplete="off" required>

        <label class="checkbox"><input type="checkbox" tabindex="3" ng-model="user.remember" />Remember me</label>
        <input type="submit" class="btn btn-primary btn-block" tabindex="4" value="sign in" ng-disabled="!login.$valid">
    </fieldset>
</form>