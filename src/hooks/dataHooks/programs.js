import { useQuery } from "react-query";
import api from "../api";

const fetchPrograms = async () => {
	const res = await api.get("/readprog");

	return res;
};

export const usePrograms = () => {
	return useQuery("programs", fetchPrograms, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});
};
