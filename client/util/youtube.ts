export function normalizeYouTubeChannelLink(link: string): string {
	return link
		.trim()
		.replace(/^(www\.)?youtube\.com\//i, 'https://$&')
		.replace(/^(https:\/\/(?:www\.)?youtube\.com\/)user\/@/i, '$1@');
}
