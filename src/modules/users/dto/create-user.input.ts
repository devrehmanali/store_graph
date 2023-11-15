import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field(() => Int, { description: '' })
  user_id: string;

  @Field(() => Int)
  first_name: string;

  @Field(() => Int)
  last_name: string;

  @Field(() => Int)
  email: string;

  @Field(() => Int)
  password: string;
}
