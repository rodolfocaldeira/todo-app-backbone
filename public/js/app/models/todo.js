define(
    [
        'underscore',
        'backbone'
    ],
    function(_, Backbone) {

        /**
         * The todo model.
         * @type {Model}
         */
        var Todo = Backbone.Model.extend({

            defaults : {
                goal   : '',
                isDone : false
            },

            toggle : function() {
                this
                    .set("isDone", !this.get("isDone"))
                    .save();
            }

        });

        return Todo;
    }
);