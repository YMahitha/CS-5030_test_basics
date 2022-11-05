

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    test("add_todo", () => {
        todo_service.add_todo({"id": 1, "title": "Learn AngularJS", "completed": false});
        todo_service.add_todo({"id": 2, "title": "Learn React", "completed": false});
        expect(todo_service.get_todos().todo.length).toEqual(5);
    });
    
    test("delete_todo", () => {
        todo_service.delete_todo(2);
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });
    
    test("update_todo", () => {
        todo_service.update_todo(1, {"id": 1, "title": "Learn Node", "completed": false});
        const objx = todo_service.get_todos().todo.findIndex((obj) => obj.id === 2);
        expect(todo_service.get_todos().todo[objx].title).toEqual("Learn Node");
    });


});
