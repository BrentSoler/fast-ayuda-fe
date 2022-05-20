import create from "zustand";

export const useUserStore = create((set) => ({
	user: {
		user_id: "",
		first_name: "",
		last_name: "",
		user_type: "",
	},
	userType: "",
	isLogged: false,
	logInHandler: (arg, user_id, first_name, last_name, user_type) =>
		set({
			userType: user_type === 0 ? "User" : "Admin",
			user: {
				user_id: user_id,
				first_name: first_name,
				last_name: last_name,
				user_type: user_type,
			},
			isLogged: arg,
		}),
	logoutHandler: () =>
		set({
			user: {
				user_id: "",
				first_name: "",
				last_name: "",
				user_type: "",
			},
			userType: "",
			isLogged: false,
		}),
}));
