define(
    [
        'js/app/collections/todos',
        'js/app/models/todo'
    ],
    function(Todos, Todo) {

        describe('Todos collection', function() {
            var todos;

            beforeEach(function() {
                todos = new Todos();
            });

            it('should be defined', function() {
                expect(Todos).toBeDefined();
                expect(todos).toBeDefined();
            });

            it('should have the Todo has the collection model', function() {
                expect(todos.model).toEqual(Todo)
            });

            it('should have local storage', function() {
                expect(todos.localStorage).toBeDefined();
                expect(todos.localStorage.name).toEqual('todo-app');
            });

        });
    }
);