define(
    [
        'js/app/models/todo'
    ],
    function(Todo) {

        describe('Todo Model', function() {

            it('should be defined', function() {
                expect(Todo).toBeDefined();
            });

            it('should have default attributes', function() {
                var todo = new Todo();
                expect(todo.get('goal')).toEqual('');
                expect(todo.get('isDone')).toBeFalsy();
            });

            it('should have custom attributes', function() {
                var todo = new Todo({ goal : 'Test the app', isDone : 'true' });
                expect(todo.get('goal')).toEqual('Test the app');
                expect(todo.get('isDone')).toBeTruthy();
            });

            it('should have a toggle method', function() {
                var todo = new Todo();
                spyOn(todo, 'save');
                expect(todo.get('isDone')).toBeFalsy();
                todo.toggle();
                expect(todo.get('isDone')).toBeTruthy();
                todo.toggle();
                expect(todo.get('isDone')).toBeFalsy();
            });

        });
    }
);