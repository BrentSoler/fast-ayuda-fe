import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useToggle } from "../../hooks";
import { useLocation } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = (props) => {
	const { path, setDraw, draw } = props;
	const [toggle, toggleFunc] = useToggle();

	return (
		<div
			className={`flex justify-between font-pop items-center shadow-md z-40 bg-main text-white ${
				path && draw ? "w-100% sm:w-[calc(100%-240px)] sm:ml-[240px]" : "w-100%"
			} transition-transform`}
		>
			{!path && <h1 className="m-4 font-bold text-2xl">FAST-Ayuda</h1>}
			<Box sx={{ display: { xs: "none", sm: "flex" } }}>
				{path && (
					<div className="flex items-center">
						<IconButton
							className={`ml-4 my-4 font-bold text-2xl text-white`}
							onClick={() => setDraw(!draw)}
						>
							{!draw ? <AiOutlineMenuUnfold /> : <AiOutlineClose />}
						</IconButton>
						{!draw && <h1 className="my-4 font-bold text-2xl text-white">FAST-Ayuda</h1>}
					</div>
				)}
			</Box>
			<Box sx={{ display: { xs: "flex", sm: "none" } }}>
				{path && (
					<div className="flex items-center">
						<IconButton
							className="ml-4 my-4 font-bold text-2xl text-white"
							onClick={() => setDraw(!draw)}
						>
							{!draw ? <AiOutlineMenuUnfold /> : <AiOutlineClose />}
						</IconButton>
						<h1 className="my-4 font-bold text-2xl text-white">FAST-Ayuda</h1>
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
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</div>
		</div>
	);
};

export default Navbar;
