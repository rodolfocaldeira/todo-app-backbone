define(
    [
        'underscore',
        'backbone',
        'Backbone.localStorage',
        'js/app/models/todo'
    ],
    function(_, Backbone, LocalStorage, Todo) {

        /**
         * The todo collection.
         * It uses the local storage plugin.
         * @type {Collection}
         */
        var Todos = Backbone.Collection.extend({
            model : Todo,
            localStorage : new LocalStorage('todo-app')
        });

        return Todos;

    }
);