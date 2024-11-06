import { LoaderProps } from "../types/Loader";

export const Loader = ({ LoaderMessage }: LoaderProps) => {
	return (
		<>
			<div>Loading </div>
			<span>{LoaderMessage}</span>
		</>
	);
};
