import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from 'class-validator';

@InputType()
export class UpdateTodoInput {

	@Field(() => Int, {
		description: 'Todo ID',
	})
	@IsInt()
	@Min(1)
	id: number;

	@Field(() => String, {
		description: 'What needs to be done?',
		nullable: true,
	})
	@IsString()
	@IsNotEmpty()
	@MaxLength(50)
	@IsOptional()
	description?: string;

	@Field(() => Boolean, {
		description: 'Is it done?',
		nullable: true,
	})
	@IsOptional()
	@IsBoolean()
	done?: boolean;
}