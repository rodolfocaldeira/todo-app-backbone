define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!js/app/templates/todo.html'
    ],
    function($, _, Backbone, template) {

        /**
         * The todo view.
         * @type {View}
         */
        var Todo = Backbone.View.extend({

            tagName : 'li',
            template : _.template(template),

            events : {
                'click label' : 'toggleIsDone',
                'click .js-toggle' : 'toggleIsDone',
                'click .js-delete' : 'destroyTodo',
                'click .js-edit' : 'enterEditMode',
                'keypress .todo-edit' : 'exitEditMode',
                'blur .todo-edit' : 'updateTodo'
            },

            initialize : function() {
                this.listenTo(this.model, 'destroy', this.remove);
                this.listenTo(this.model, 'change', this.render);
            },

            render : function() {
                this.$el.html(this.template(this.model.toJSON()));
                this.$el.toggleClass('is-done', this.model.get('isDone'));

                this.$editTodo = this.$('.todo-edit');

                return this;
            },

            /**
             * Toggles the todo done flag.
             */
            toggleIsDone : function() {
                this.model.toggle();
            },

            /**
             * Changes the browser focus to the input.
             * Used when the user is editing the todo goal.
             * @private
             */
            _focusOnEditInput : function() {
                this.$editTodo.focus();
            },

            enterEditMode : function() {
                this.$el.addClass('is-edit-mode');
                this._focusOnEditInput();
            },

            exitEditMode : function(event) {
                if(event.keyCode === 13) {
                    this.updateTodo();
                }
            },

            _getEditInputVal : function() {
                return this.$editTodo.val().trim();
            },

            updateTodo : function() {
                var newGoal = this._getEditInputVal();

                if(newGoal !== "") {
                    this.model.save({ goal : newGoal });
                }
                else {
                    this.destroyTodo();
                }

                this.$el.removeClass('is-edit-mode');
            },

            destroyTodo : function() {
                this.model.destroy();
            }

        });

        return Todo;

    }
);