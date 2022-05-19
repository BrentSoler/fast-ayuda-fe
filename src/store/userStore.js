import create from "zustand";

export const useUserStore = create((set) => ({
	user: {
		user_id: "",
		first_name: "",
		last_name: "",
		user_type: "",
	},
	isLogged: false,
	logInHandler: (arg, user_id, first_name, last_name, user_type) =>
		set({
			user: {
				user_id: user_id,
				first_name: first_name,
				last_name: last_name,
				user_type: user_type,
			},
			isLogged: arg,
		}),
}));
