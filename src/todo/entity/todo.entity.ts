import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
	
	@Field(() => Int, {
		description: 'Todo ID',
	})
	id: number;

	@Field(() => String, {
		description: 'Todo description',
	})
	description: string;

	@Field(() => Boolean)
	done: boolean = false;
}