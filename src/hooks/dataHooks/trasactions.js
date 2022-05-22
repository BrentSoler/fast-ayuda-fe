import api from "../api";
import { useQuery, QueryClient, useMutation } from "react-query";
import { useUserStore } from "../../store/userStore";

const fetchTransactions = async () => {
	const res = await api.get("/readtrans");

	return res;
};

export const useTransactions = () => {
	return useQuery("transactions", fetchTransactions, {
		refetchOnWindowFocus: false,
	});
};

const postTransac = async ({ transaction, func }) => {
	const res = await api.post("/createtrans", transaction);
	func();
};

export const usePostTransaction = () => {
	const queryClient = new QueryClient();

	return useMutation(postTransac, {
		onSucces: (transaction) => {
			queryClient.setQueryData("transactions", transaction);
		},
		onError: (err) => {
			console.log(err.message);
		},
	});
};
