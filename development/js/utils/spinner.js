define('utils/spinner', function () {

    var Spinner = function () {

        var that = this;

        this.container = null;
        this.spinner = null;

        /**
         * @method  render
         * @param  {object} container
         * @description dom element
         * @return {void}
         */
        this.render = function (el) {

            that.container = $(el);

            that.container.children().css({display:'none'});

            that.spinner = $('<div>' +
                '<div class="loading">' +
                    '<div></div>' +
                    '<div></div>' +
                    '<div></div>' +
                    '<div></div>' +
                    '<div></div>' +
                '</div>' +
                '</div>');

            that.container.append(that.spinner);

            if (that.isShowing()) {
                that.remove();
            }

            that.show();
        };

        /**
         * @method  isShowing
         * @return {Boolean}
         */
        this.isShowing = function () {
            return that.spinner.hasClass('spinner');
        };

        /**
         * @method  remove
         * @return {void}
         */
        this.remove = function () {
            that.container.find('.spinner').remove();
            that.container.children().css({display:'block'});
        };

        this.show = function () {
            that.spinner.addClass('spinner');
        }
    };

    return new Spinner();
});