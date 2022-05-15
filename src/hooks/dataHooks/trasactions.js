import api from "../api";
import { useQuery, QueryClient, useMutation } from "react-query";

const fetchTransactions = async () => {
	const res = await api.get("/readtrans");

	return res;
};

export const useTransactions = () => {
	return useQuery("transactions", fetchTransactions, {
		refetchOnWindowFocus: false,
	});
};

const postTransac = async (transaction) => {
	const res = await api.post("/createtrans", transaction);
};

export const usePostTransaction = () => {
	const queryClient = new QueryClient();

	return useMutation(postTransac, {
		onSucces: (transaction, func) => {
			queryClient.setQueryData("transactions", transaction);
			func();
		},
		onError: (err) => {
			console.log(err.message);
		},
	});
};
