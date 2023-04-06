import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dto/inputs/create-todo.dto';
import { UpdateTodoInput } from './dto/inputs/update-todo.dto';
import { StatusArgs } from './dto/args/status.args';

@Injectable()
export class TodoService {

	private todos: Todo[] = [
		{
			description: 'Learn GraphQL',
			done: false,
			id: 1,
		},
		{
			description: 'Learn NestJS',
			done: true,
			id: 2,
		},
		{
			description: 'Learn React',
			done: false,
			id: 3,
		},
		{
			description: 'Learn Angular',
			done: false,
			id: 4,
		}
	];

	get totalTodos(): number {
		return this.todos.length;
	}

	get completedTodos(): number {
		return this.todos.filter(todo => todo.done).length;
	}

	get pendingTodos(): number {
		return this.totalTodos - this.completedTodos;
	}

	findAll(statusArgs: StatusArgs): Todo[] {
		const { status } = statusArgs;
		if (status !== undefined) {
			return this.todos.filter(todo => todo.done === status);
		}
		return this.todos;
	}

	findOne(id: number): Todo {
		const todo = this.todos.find(todo => todo.id === id);
		if (!todo) 
			throw new NotFoundException(`Todo with id ${id} not found`);
		return todo;
	}

	create(createTodoInput: CreateTodoInput): Todo {
		const todo = new Todo();
		todo.description = createTodoInput.description;
		todo.done = false;
		todo.id = Math.max(...this.todos.map(todo => todo.id), 0) + 1;
		this.todos.push(todo);
		return todo;
	}
	
	update(updateTodoInput: UpdateTodoInput): Todo {
		const todoUpdated = this.findOne(updateTodoInput.id);
		if(updateTodoInput.description) todoUpdated.description = updateTodoInput.description;
		if (updateTodoInput.done!== undefined) todoUpdated.done = updateTodoInput.done;
		this.todos = this.todos.map(todo => todo.id === updateTodoInput.id ? todoUpdated : todo);
		return todoUpdated;
	}

	delete(id: number): boolean {
		this.findOne(id);
		this.todos = this.todos.filter(todo => todo.id !== id);
		return true;
	}	

}
