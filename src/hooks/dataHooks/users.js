import { useQuery, QueryClient, useMutation } from "react-query";
import api from "../api";

const postUser = async (user) => {
	const res = await api.post("/create", user);
};

export const usePostUser = () => {
	return useMutation(postUser, {
		onSuccess: (user, func) => {
			func();
		},
		onError: (err) => {
			console.log(err.message);
		},
	});
};
