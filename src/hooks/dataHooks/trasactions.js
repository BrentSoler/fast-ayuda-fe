import api from "../api";
import { useQuery, QueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import { toast } from "react-toastify";

const fetchTransactions = async () => {
	const res = await api.get("/readtrans");

	return res;
};

export const useTransactions = () => {
	return useQuery("transactions", fetchTransactions, {
		refetchOnWindowFocus: false,
	});
};

const postTransac = async ({ transaction }) => {
	const res = await api.post("/createtrans", transaction);
};

export const usePostTransaction = () => {
	const queryClient = new QueryClient();
	const navigate = useNavigate();

	return useMutation(postTransac, {
		onSuccess: (transaction) => {
			toast.success("Successfully booked an appoinment");
			queryClient.setQueryData("transactions", transaction);
			navigate("/dashboard/transactions");
		},
		onError: (err) => {
			console.log(err.message);
		},
	});
};
