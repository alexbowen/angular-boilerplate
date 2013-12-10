<form action="" method="post" accept-charset="utf-8" ng-submit="authenticate()">
	<a href="#" class="header">Sign in</a>
	<fieldset>
		<label for="id_username">Username</label>
		<input type="text" name="username" id="id_username" tabindex="1" ng-model="user.name" autocomplete="off" />

		<label for="id_password">
			Password
			<a href="#" title="Forgot?" class="pull-right" tabindex="5">Forgot?</a>
		</label>
		<input type="password" name="password" autocomplete="off" id="id_password" tabindex="2" ng-model="user.pass" />

		<label class="checkbox">
			<input type="checkbox" tabindex="3" ng-model="user.remember" />Remember me
		</label>
		<input type="submit" class="btn btn-primary btn-block" tabindex="4" value="sign in">
	</fieldset>
</form>