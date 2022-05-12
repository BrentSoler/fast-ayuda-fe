import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useToggle } from "../../hooks";

const Navbar = () => {
	const [toggle, toggleFunc] = useToggle();

	return (
		<div className="flex justify-between font-pop items-center shadow-md z-40 bg-main text-white">
			<h1 className="m-4 font-bold text-2xl">FAST-Ayuda</h1>

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
				} md:translate-x-0 md:bg-transparent z-40`}
			>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</div>
		</div>
	);
};

export default Navbar;
