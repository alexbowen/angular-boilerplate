<div id="contact-form" ng-controller="SetVersionController">
    <h2>Set an App's Version</h2>
    <form id="setVersion" ng-submit="setAppId()">
        <fieldset>
            <label for="appid">App Id</label>
            <input type="text" name="appid" placeholder="" ng-model="appid">

            <label for="version">Version</label>
            <input type="text" name="version" placeholder="1.2.3" ng-model="version">

            <input type="submit" name="submit" id="submit" value="Set app version" />
        </fieldset>
    </form>
</div>