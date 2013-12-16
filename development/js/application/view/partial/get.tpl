<div id="contact-form" ng-controller="GetVersionController">
    <h2>Get an App's Version</h2>
    <form id="getVersion" ng-submit="getAppId()">
        <fieldset>
            <label for="appid">App Id</label>
            <input type="text" name="getappid" placeholder="AppName" ng-model="appid">

            <label for="version">Version</label>
            <input type="text" name="getversion" placeholder="1.2.3" ng-model="version">

            <label for="createddate">Created Date</label>
            <input type="text" name="getcreateddate" placeholder="02 Jan 06 15:04" ng-model="created">

            <input type="submit" name="getsubmit" id="getsubmit" value="Get app version" />
        </fieldset>
    </form>
</div>