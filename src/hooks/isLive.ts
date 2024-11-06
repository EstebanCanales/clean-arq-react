export const isAlive = (status: string) => {
	return status === "Alive" ? "green" : status === "Dead" ? "red" : "gray";
};
