import { todos } from "../store";

class TodoService {
    async getTodos(){
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        todos.next(result)
    }
}
export const todoService = new TodoService();