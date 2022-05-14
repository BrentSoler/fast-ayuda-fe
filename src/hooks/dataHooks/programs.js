import { useQuery, QueryClient, useMutation } from "react-query";
import api from "../api";

const fetchPrograms = async () => {
	const res = await api.get("/readprog");

	return res;
};

export const usePrograms = () => {
	return useQuery("programs", fetchPrograms, {
		refetchOnWindowFocus: false,
	});
};

const postProgram = async (prog) => {
	const resProg = await api.post("/createprog", prog);
};
const postSched = async (sched) => {
	const resSched = await api.post("/createsched", sched);
};

export const usePostProgram = () => {
	const queryClient = new QueryClient();

	return useMutation(postProgram, {
		onSuccess: (prog) => {
			queryClient.setQueryData("programs", prog);
		},
	});
};
export const usePostSched = () => {
	const queryClient = new QueryClient();

	return useMutation(postSched, {
		onSuccess: (sched) => {
			queryClient.setQueryData("sched", sched);
		},
	});
};
