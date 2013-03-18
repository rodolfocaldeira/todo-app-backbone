define(
    [
        'js/app/views/todo',
        'js/app/models/todo'
    ],
    function(TodoView, TodoModel) {

        describe('Todo View', function() {

            var todoView;

            beforeEach(function() {
                var todoModel = new TodoModel({ goal : 'Testing the view', isDone : false });
                spyOn(todoModel, 'save');
                todoView = new TodoView({ model : todoModel });
                spyOn(todoView, '_focusOnEditInput');
                spyOn(todoView, '_getEditInputVal').andReturn('');
            });

            it('should be defined', function() {
                expect(TodoView).toBeDefined();
                expect(todoView).toBeDefined();
            });

            it('should have li has tag', function() {
                expect(todoView.el.nodeName).toBe('LI');
            });

            it('should render', function() {
                todoView.render();
                expect($(todoView.el).find('.js-toggle').attr('checked')).toBeFalsy();
                expect($(todoView.el).find('label').text()).toEqual('Testing the view');
                expect($(todoView.el).find('.todo-edit').val()).toBe('Testing the view');
                expect($(todoView.el).find('.js-edit').length).toBe(1);
                expect($(todoView.el).find('.js-delete').length).toBe(1);
                expect($(todoView.el).find('.todo-edit').length).toBe(1);
            });

            it('should listen for changes in the model', function() {
                todoView.model.set('goal', 'Changed the goal');
                expect($(todoView.el).find('label').text()).toEqual('Changed the goal');
            });

            it('should update the checkbox', function() {
                todoView.toggleIsDone();
                expect($(todoView.el).find('.js-toggle').attr('checked')).toBeTruthy();
            });

            it('should have a class indicating the edit mode', function() {
                todoView.enterEditMode();
                expect($(todoView.el).hasClass('is-edit-mode')).toBeTruthy();
            });

            it('should have remove the class when exiting edit mode', function() {
                var fakeEvent = { keyCode : 13 };
                todoView.exitEditMode(fakeEvent);
                expect($(todoView.el).hasClass('is-edit-mode')).toBeFalsy();
            });

        });

    }
);

