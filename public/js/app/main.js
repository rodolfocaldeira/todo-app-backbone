if(!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+/,'').replace(/\s+$/, '');
    };
}

require(
    ['js/app/views/app'],
    function(App) {

        // App initialization
        var TodoApp = window.TodoApp || {};
        TodoApp.app = new App();

    }
);