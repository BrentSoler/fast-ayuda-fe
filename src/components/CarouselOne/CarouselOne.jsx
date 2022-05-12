import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineLine, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCarousel } from "../../hooks";

const CarouselOne = ({ pics, interval }) => {
	const imgLength = pics.length - 1;
	const { visible, navigatorFunc, handleCarousel } = useCarousel(imgLength);

	let res;

	useEffect(() => {
		res = setTimeout(function () {
			navigatorFunc(visible === imgLength ? 0 : visible + 1);
		}, interval * 1000);
	}, [visible]);

	return (
		<div className="group flex gap-3 items-center overflow-hidden w-[100%] h-[15rem] md:h-[25rem] lg:h-[90vh] relative z-10 bg-black">
			<button
				onClick={() => {
					handleCarousel(0);
					clearTimeout(res);
				}}
				className="arw_btn opacity-0 left-1 transition-all group-hover:opacity-100 z-20"
			>
				<AiOutlineLeft className="text-[25px] md:text-[35px]" />
			</button>

			<div className="flex h-full w-full opacity-50">
				{pics.map((pics, i) => (
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: visible === i ? 1 : 0 }}
						transition={{ duration: 0.9 }}
						src={pics}
						key={i}
						className={`${visible === i ? "visible" : "hidden"} w-full pointer-events-none`}
					/>
				))}
			</div>

			<div className="absolute flex items-center flex-col w-full font-pop text-white">
				<h1>Welcome to FAST-Ayuda</h1>
				<h1 className="text-5xl font-bold">Take Pinas</h1>
				<h1 className="text-5xl font-bold">@ new Level</h1>
			</div>

			<button
				onClick={() => {
					handleCarousel(1);
					clearTimeout(res);
				}}
				className="arw_btn right-1 opacity-0 transition-all group-hover:opacity-100"
			>
				<AiOutlineRight className="text-[25px] md:text-[35px]" />
			</button>

			<div className="absolute left-28 w-full flex gap-5 bottom-[5rem] transition-all">
				<Link to="/about-us">
					<button className="btn border-gray-600 border-2 hover:text-gray-700 hover:border-gray-700 text-gray-600 transition-all font-bold">
						About Us
					</button>
				</Link>
				<button className="btn bg-gray-600 text-white border-2 border-gray-600 hover:bg-gray-700 transition-all">
					Get Started
				</button>
			</div>

			<div className="flex gap-2 absolute bottom-0 opacity-0 transition-all group-hover:opacity-100 w-full justify-center">
				{pics.map((pics, i) => (
					<AiOutlineLine
						className={`${
							visible === i ? "text-gray-600" : "text-white"
						} cursor-pointer transition-all text-[20px] md:text-[40px] hover:text-gray-400`}
						onClick={() => {
							navigatorFunc(i);
							clearTimeout(res);
						}}
						key={i}
					/>
				))}
			</div>
		</div>
	);
};

export default CarouselOne;
