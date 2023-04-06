import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
	@Query(() => String, {
		name: 'helloWorld',
		description: 'Hello World message',
	})
	helloWorld():string {
		return 'Hello World';
	}

	@Query(() => Float, {
		name: 'randomNumber',
	})
	getRandomNumber():number {
		return Math.random()*100;
	}

	@Query(() => Int, {
		name: 'randomFromZeroTo',
		description: 'Random number from 0 to the given number',
	})
	getRandomFromZeroTo(
		@Args('to', { type: () => Int, nullable: true}) to: number = 6
	):number {
		return Math.floor(Math.random()*to);
	}
}
