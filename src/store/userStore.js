import create from "zustand";

export const useUserStore = create((set) => ({
	isLogged: false,
	logInHandler: (arg) =>
		set({
			isLogged: arg,
		}),
}));
