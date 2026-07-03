// GraphQL multipart uploads are gone — files go to tRPC as base64 strings
export function fileToBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			const result = reader.result as string;
			// Strip the data-URL prefix ("data:image/png;base64,")
			resolve(result.split(',')[1] || '');
		};
		reader.onerror = () => reject(reader.error);
		reader.readAsDataURL(file);
	});
}
