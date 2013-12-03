define('utils/history', [
    'jquery',
    'utils/support'
], function ($, supportUtil) {
    /**
     * @author Alex Bowen
     * @date 07/12
     *
     * @description
     * This listener can be added to any page and provides a abstract way
     * of using the HTML5 History api. You need to supply the pages initial
     * state in its constuctor (see channel component) and have a listener
     * in that controller for popstate with what to do if this event is fired
     *
     * the only thing you need to do to your controller that initialises this
     * api is listen to the tviplayer:listeners:popstate event to make that
     * do what it needs to do when the url has changed.
     */
    
    /**
    * @constructor
    * @param  {object} state - arbitary state data
    * @return {void}
    */
    var HistoryApi = function (state) {

        var historyApi = this;

        // Detect history pushstate, store it in support
        // util for use in other controllers and models
        supportUtil.registerFeature('historyApi', !!window.history.pushState);

        //test for browser support
        if (!supportUtil.featureCompatibility('historyApi')) {
            console.warn('history api not supported - destroying history model');
            history.delete();
            return;
        }

        $(window).on('url:changed', function (e, args) {
            historyApi.push(args.state, args.href);
        });

        $(window).on('popstate', function (e) {

            if (e.originalEvent.state) {
                historyApi.state = e.originalEvent.state;
            }

            console.log('popstate heard', window.history, e);

            //if the postate event has been fired, url change will
            //also be heard below but we have to set a flag as we dont
            //to re-apply the state to pushstate otherwise back button
            //will appear to stop working
            historyApi.popped = true;

            $(window).trigger('page:change', [{'state' : window.history.state}]);
        });

        this.state = state;

        //some browsers add the initial page state automatically
        //this effectively replaces any initial entry with the
        //state we want. a duplicate entry may occur otherwise
        //this.replace(this.state, this.options.href);
    };

    HistoryApi.prototype = {

        state : {},
        popped : false,

        /**
         * push
         * @param  {object} state - arbitary state data
         * @param  {string} href
         * @return {void}
         */
        push: function (state, href) {
            if (!this.popped) {
                this.popped = false;
                window.history.pushState(state, null, href);
            }
        },

        /**
         * replace
         * @param  {object} state - arbitary state data
         * @param  {string} href
         * @return {void}
         */
        replace: function (state) {
            if (!this.popped) {
                this.popped = false;
                window.history.replaceState(state, null, '');
            }
        }
    };

    return new HistoryApi();
});