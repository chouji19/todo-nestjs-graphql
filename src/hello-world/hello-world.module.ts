import { Module } from '@nestjs/common';
import { HelloWorldResolver } from './hello-world.resolver';
import { Float, Int, Query } from '@nestjs/graphql';

@Module({
  providers: [HelloWorldResolver]
})
export class HelloWorldModule {}
