export interface ApiResponse {
	info: {
		count: number;
		pages: number;
		next: string | null;
		prev: string | null;
	};
	results: Array<any>;
}
