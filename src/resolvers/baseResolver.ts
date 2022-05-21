import { Query, Resolver } from 'type-graphql';

@Resolver()
export default class BaseResolver {
  @Query(() => String)
  BaseResolver() {
    return 'Foo Bar Baz';
  }
}
