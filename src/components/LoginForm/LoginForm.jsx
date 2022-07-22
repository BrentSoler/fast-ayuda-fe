import { Button, TextField } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUser } from "../../hooks/dataHooks/users";
import { useUserStore } from "../../store/userStore";

const LoginForm = () => {
	const logged = useUserStore((state) => state.isLogged);
	const [mobile, setMobile] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [passwordFail, setPasswordFail] = React.useState(false);
	const { mutate } = useLoginUser();
	const navigate = useNavigate();

	const handleSucces = (arg) => {
		setMobile("");
		setPassword("");
		if (!arg) {
			setPasswordFail(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault(e);

		const user = {
			mobile_number: mobile,
			password: password,
		};

		mutate({ user: user, func: handleSucces });
	};

	return (
		<form
			className="flex flex-col p-5 border-[.2px] gap-4 rounded-md justify-center w-[20rem]"
			onSubmit={(e) => handleSubmit(e)}
		>
			<TextField label="Mobile No." value={mobile} onChange={(e) => setMobile(e.target.value)} />
			<TextField
				label="Password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			{passwordFail && (
				<p className="self-center text-sm text-red-500">Wrong Password or Mobile No.</p>
			)}
			<div className="flex flex-col mt-5 gap-2 items-center">
				.
				<Button variant="contained" type="submit" disabled={!mobile}>
					Login
				</Button>
				<Link to="/signup" className="w-max">
					<Button sx={{ fontSize: 10, width: "max" }}>No Account? Sign up here!</Button>
				</Link>
			</div>
		</form>
	);
};

export default LoginForm;
