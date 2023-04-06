import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';

@ArgsType()
export class StatusArgs {

	@Field(() => Boolean, {
		description: 'Filter todo list by status',
		nullable: true,
	})
	@IsOptional()
	@IsBoolean()
	status?: boolean;

}