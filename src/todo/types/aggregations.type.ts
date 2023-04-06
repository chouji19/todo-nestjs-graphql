import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({
	description: 'Aggregation type',
})
export class AggregationType {

	@Field(() => Int)
	total: number;

	@Field(() => Int)
	pending: number;

	@Field(() => Int)
	completed: number;

	@Field(() => Int, {
		description: 'Total todo completed',
		deprecationReason: 'Use completed instead',
	})
	totalTodoCompleted: number;
	
}