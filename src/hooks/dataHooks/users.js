import { useQuery, useMutation, QueryClient } from "react-query";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api";

const postUser = async ({ user }) => {
	const res = await api.post("/create", user);
};

export const usePostUser = () => {
	const navigate = useNavigate();
	return useMutation(postUser, {
		onSuccess: (user) => {
			toast.success("Successfully registered");
			navigate("/login");
		},
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
	console.log(res);
	return res;
};

export const useLoginUser = () => {
	const loginHandler = useUserStore((state) => state.logInHandler);
	const password = useUserStore((state) => state.password);
	const navigate = useNavigate();

	return useMutation(loginUser, {
		onSuccess: (user) => {
			if (user.data.message === "Successfully login!") {
				loginHandler(
					true,
					user.data.user_id,
					user.data.first_name,
					user.data.last_name,
					user.data.user_type,
					password
				);
				toast.success("Successfully logged in");
				navigate("/dashboard");
			}
		},
		onError: (err) => {
			console.log(err);
		},
	});
};

const fetchUser = async (id) => {
	const res = await api.get("/readsingle", {
		params: {
			user_id: id.queryKey[1],
		},
	});

	return res.data;
};

export const useGetUser = (id) => {
	return useQuery(["user", id], (id) => fetchUser(id), {
		refetchOnWindowFocus: false,
		refetchOnMount: true,
	});
};

const fetchAllUser = async () => {
	const res = await api.get("/read");

	return res.data;
};
export const useGetAllUser = () => {
	return useQuery("users", fetchAllUser, {
		refetchOnWindowFocus: false,
	});
};

const updateUser = async ({ data }) => {
	const Udata = data.userData;

	const res = await api.put("/update", {
		user_id: parseInt(Udata.user_id),
		first_name: Udata.first_name,
		middle_name: Udata.middle_name,
		last_name: Udata.last_name,
		email: Udata.email,
		password: Udata.password,
		suffix: Udata.suffix,
		mobile_number: Udata.mobile_number,
		contact_person_number: Udata.contact_person_number,
		contact_person: Udata.contact_person,
		gender: Udata.gender,
		barangay: Udata.barangay,
		street: Udata.street,
		unit_number: Udata.unit_number,
		lot_and_block_number: Udata.lot_and_block_number,
		birthday: Udata.birthday,
	});

	console.log(res);
};

export const useUpdateUser = () => {
	const navigate = useNavigate();

	return useMutation(updateUser, {
		onSuccess: () => {
			console.log("Noice");
			toast.success("Successfully updated profile");
			navigate(-1);
		},
	});
};
