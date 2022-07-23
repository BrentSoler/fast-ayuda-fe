import create from "zustand";

export const useUserStore = create((set) => ({
	user: {
		user_id: "",
		first_name: "",
		last_name: "",
		user_type: "",
		password: "",
	},
	userType: "",
	password: "",
	isLogged: false,
	passwordChange: (password) => set({ password: password }),
	logInHandler: (arg, user_id, first_name, last_name, user_type, password) =>
		set({
			userType: user_type == 0 ? "User" : "Admin",
			user: {
				user_id: user_id,
				first_name: first_name,
				last_name: last_name,
				user_type: user_type,
				password: password,
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

export const useServiceType = create((set) => ({
	Service: "",
	changeHandler: (arg) =>
		set({
			Service: arg,
		}),
}));
