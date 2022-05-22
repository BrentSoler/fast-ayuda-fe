import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useToggle } from "../../hooks";
import { Box, IconButton } from "@mui/material";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useUserStore } from "../../store/userStore";

const Navbar = (props) => {
	const isLoggedIn = useUserStore((state) => state.isLogged);
	const logout = useUserStore((state) => state.logoutHandler);
	const { path, setDraw, draw, menu, menuUi } = props;
	const [toggle, toggleFunc] = useToggle();

	return (
		<div
			className={`flex justify-between font-pop items-center shadow-md z-40 bg-main text-white ${
				path && draw ? "w-100% sm:w-[calc(100%-200px)] sm:ml-[200px]" : "w-100%"
			} transition-transform`}
		>
			{!path && (
				<Link to="/">
					<h1 className="m-4 font-bold text-2xl">E-SKEDYUL</h1>
				</Link>
			)}
			<Box sx={{ display: { xs: "none", sm: "flex" } }}>
				{path && (
					<div className="flex items-center">
						<IconButton
							className={`ml-4 my-4 font-bold text-2xl text-white`}
							onClick={(e) => {
								setDraw(!draw);
							}}
						>
							{!draw ? <AiOutlineMenuUnfold /> : <AiOutlineClose />}
						</IconButton>

						{!draw && <h1 className="my-4 font-bold text-2xl text-white">E-SKEDYUL</h1>}
					</div>
				)}
			</Box>
			<Box sx={{ display: { xs: "flex", sm: "none" } }}>
				{path && (
					<div className="flex items-center">
						<IconButton
							className={`ml-4 my-4 font-bold text-2xl text-white`}
							onClick={(e) => {
								menu(e);
							}}
						>
							{!menuUi ? <AiOutlineMenuUnfold /> : <AiOutlineClose />}
						</IconButton>
						<h1 className="my-4 font-bold text-2xl text-white">E-SKEDYUL</h1>
					</div>
				)}
			</Box>

			<motion.button
				animate={{ rotate: toggle ? 180 : 360 }}
				onClick={() => toggleFunc()}
				className="z-50 mr-4 md:hidden"
			>
				{!toggle ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
			</motion.button>

			<div
				className={`navbar bg-white bg-opacity-70 backdrop-blur-sm ${
					!toggle ? "translate-x-full" : "translate-x-0"
				} md:translate-x-0 md:bg-transparent z-40 text-black md:text-white`}
			>
				{!isLoggedIn && (
					<>
						<Link to="/">
							<p>Home</p>
						</Link>
						<Link to="/login">
							<p>Login</p>
						</Link>
						<Link to="/signup">
							<p>Signup</p>
						</Link>
					</>
				)}
				{isLoggedIn && (
					<>
						<Link to="/">
							<p>Home</p>
						</Link>
						<p onClick={() => logout()} className="cursor-pointer">
							Logout
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default Navbar;
