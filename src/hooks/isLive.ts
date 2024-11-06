export const isAlive = (status: String) => {
	return status === "Alive" ? "green" : status === "Dead" ? "red" : "gray";
};
