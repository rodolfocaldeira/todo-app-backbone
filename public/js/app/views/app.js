define(
    [
        'jquery',
        'underscore',
        'backbone',
        'js/app/collections/todos',
        'js/app/views/todo'
    ],
    function($, _, Backbone, Todos, TodoView) {

        /**
         * The Todo app view.
         * @type {View}
         */
        var App = Backbone.View.extend({

            el : '#todo-app',
            events : {
                'keypress .todo-create input' : 'createTodo'
            },

            initialize : function() {
                this.todos = new Todos();

                this.$createInput = this.$('.todo-create input');
                this.$mainUl = this.$('.todo-main ul');

                this.listenTo(this.todos, 'add', this.addTodo);
                this.listenTo(this.todos, 'reset', this.addTodos);

                this.todos.fetch();
            },

            createTodo : function(event) {
                var goal = this.$createInput.val().trim();
                if(event.keyCode === 13 && goal !== "") {
                    this.todos.create({
                        goal   : goal,
                        isDone : false
                    });
                    this.$createInput.val('');
                }
            },

            addTodo : function(todo) {
                var view = new TodoView({ model : todo });
                this.$mainUl.prepend(view.render().el);
            },

            addTodos : function() {
                this.$mainUl.empty();
                this.todos.each(this.addTodo, this);
            }

        });

        return App;

    }
);