import {Arg, Ctx, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {getHelpArticle, getHelpNavTree} from '../models/help';
import {ArticleCategory, ArticlePage} from '../schemas/Article.schema';

@Resolver()
export class HelpResolver {
	@Query(() => [ArticleCategory])
	async helpCategories(@Ctx() context: GraphQLContext) {
		return await getHelpNavTree();
	}

	@Query(() => ArticlePage)
	async helpArticle(@Ctx() context: GraphQLContext, @Arg('slug') slug: string) {
		return await getHelpArticle(slug);
	}
}
