import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../../store/userStore";

const LoginProtection = () => {
	const isLogged = useUserStore((state) => state.isLogged);

	return !isLogged ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default LoginProtection;
