import {Arg, ClassType, Int, Query, Resolver} from 'type-graphql';

export function createBaseResolver<T extends ClassType>(suffix: string, objectTypeCls: T) {
	@Resolver({isAbstract: true})
	abstract class BaseResolver {
		protected items: T[] = [];

		@Query((type) => [objectTypeCls], {name: `getAll${suffix}`})
		async getAll(@Arg('first', (type) => Int) first: number): Promise<T[]> {
			return this.items.slice(0, first);
		}
	}

	return BaseResolver;
}
