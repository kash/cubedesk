import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class ArticlePreview {
	@Field()
	_id: string;

	@Field()
	title: string;

	@Field()
	slug: string;

	@Field()
	path: string;

	@Field()
	order: number;

	@Field()
	hidden: boolean;

	@Field(() => [ArticlePreview])
	children: ArticlePreview[];
}

@ObjectType()
export class ArticleCategory {
	@Field()
	id: string;

	@Field()
	title: string;

	@Field()
	slug: string;

	@Field()
	order: number;

	@Field()
	reference: boolean;

	@Field()
	createdAt: string;

	@Field(() => [ArticlePreview])
	children: ArticlePreview[];
}

@ObjectType()
export class ArticlePage {
	@Field()
	id: string;

	@Field()
	title: string;

	@Field()
	slug: string;

	@Field()
	body: string;

	@Field()
	hidden: boolean;

	@Field()
	order: number;

	@Field()
	isReference: boolean;

	@Field()
	excerpt: string;

	@Field()
	createdAt: string;

	@Field()
	updatedAt: string;

	@Field()
	parentDoc: string;

	@Field()
	category: string;
}
