declare module '*.png' {
	const content: any;
	export default content;
}

interface Window {
	[key: string]: any;
}

declare module '*?worker&url' {
	const src: string;
	export default src;
}
