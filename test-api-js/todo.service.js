class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // add new todo
        this.todos.todo.push(todo);
    }

    delete_todo(id){
        const index = this.todos["todo"].findIndex((obj) => obj.id === id);
        this.todos.todo.splice(index, 1);
    }

    update_todo(id, todo){
        // Your code here
    }
}


module.exports= todoservice;
