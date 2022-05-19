import { useQuery, QueryClient, useMutation } from "react-query";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import api from "../api";

const postUser = async ({ user, func }) => {
	const res = await api.post("/create", user);
	func();
};

export const usePostUser = () => {
	return useMutation(postUser, {
		onSuccess: (user) => {},
		onError: (err) => {
			console.log(err.message);
		},
	});
};

const loginUser = async ({ user, func }) => {
	const res = await api.post("/login", user);
	if (res.data.message === "Successfully login!") {
		func(true);
	} else {
		func(false);
	}
	return res;
};

export const useLoginUser = () => {
	const loginHandler = useUserStore((state) => state.logInHandler);
	const navigate = useNavigate();

	return useMutation(loginUser, {
		onSuccess: (user) => {
			if (user.data.message === "Successfully login!") {
				loginHandler(
					true,
					user.data.user_id,
					user.data.first_name,
					user.data.last_name,
					user.data.user_type
				);
				navigate("/dashboard");
			}
		},
		onError: (err) => {
			console.log(err);
		},
	});
};
