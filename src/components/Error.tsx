import { ErrorProps } from "../types/Error";

export const Error = ({ ErrorMessage }: ErrorProps) => {
	return <div>Error fetching data {ErrorMessage}</div>;
};
