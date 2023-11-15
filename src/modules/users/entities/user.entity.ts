import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { plainToClass } from 'class-transformer';
import { uuidv4 } from '@utils';

@ObjectType()
@Entity({
  name: 'users',
  orderBy: {
    createdAt: 'ASC',
  },
})
export class User {
  @Field(() => Int, { description: ' ' })
  @ObjectIdColumn()
  _id: string;

  @Field(() => Int, { description: ' ' })
  @Column()
  user_id: string;

  @Field(() => Int, { description: ' ' })
  @Column()
  first_name: number;

  @Field(() => Int, { description: ' ' })
  @Column()
  last_name: number;

  @Field()
  get fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }

  @Field(() => Int, { description: ' ' })
  @Column()
  email: number;

  @Field(() => Int, { description: ' ' })
  @Column()
  password: number;

  @Field(() => Boolean, { description: ' ' })
  @Column()
  isVerified: boolean;

  // @Field(() => Object, { description: ' ' })
  // @Column()
  // local: Local;

  // @Field(() => Object, { description: ' ' })
  // @Column()
  // google: Google;

  // @Field(() => Object, { description: ' ' })
  // @Column()
  // facebook: Facebook;

  @Field(() => Boolean, { description: ' ' })
  @Column()
  isOnline: boolean;

  @Field(() => Boolean, { description: ' ' })
  @Column()
  isLocked: boolean;

  @Field(() => Boolean, { description: ' ' })
  @Column()
  reason: string;

  @Field(() => Boolean, { description: ' ' })
  @Column()
  isActive: boolean;

  @Field(() => String, { description: ' ' })
  @Column()
  createdAt: string;

  @Field(() => String, { description: ' ' })
  @Column()
  updatedAt: string;

  constructor(user: Partial<User>) {
    if (user) {
      Object.assign(
        this,
        plainToClass(User, user, {
          excludeExtraneousValues: true,
        }),
      );
      this.user_id = this.user_id || uuidv4();
      this.isVerified = this.isVerified !== undefined ? this.isVerified : false;
      this.isOnline = this.isOnline !== undefined ? this.isOnline : false;
      this.isLocked = this.isLocked !== undefined ? this.isLocked : false;
      this.isActive = this.isActive !== undefined ? this.isActive : true;
      this.createdAt = this.createdAt || new Date().toISOString();
      this.updatedAt = new Date().toISOString();
    }
  }
}
