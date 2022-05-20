import React from "react";
import CarouselOne from "../../components/CarouselOne/CarouselOne";
import Default from "../../assets/default.png";
import { pic1, pic2, pic3, pic4 } from "../../assets";

const Home = () => {
	const picsArr = [pic1, pic2, pic3, pic4];

	return (
		<div className="">
			<CarouselOne pics={picsArr} interval={10} />
			<div className="flex flex-col  items-center p-5 font-pop gap-3 mb-5">
				<h1 className="text-main text-4xl font-bold">About Us</h1>
				<div className="md:flex pb-9 gap-3">
					<img src={Default} alt="" className="w-[15rem]" />
					<img src={Default} alt="" className="w-[15rem]" />
					<img src={Default} alt="" className="w-[15rem]" />
					<img src={Default} alt="" className="w-[15rem]" />
				</div>
				<h1 className="text-2xl text-main text-center">
					We are champions that help for a better future
				</h1>
				<p className="w-[min(90%,50rem)] text-center text-lg">
					Dedicated to the well being - of all people and guided by science and technology, The
					Fast-Ayuda leads and champions global effort to give everyopne, everywhere an equal chance
					to live an efficient life
				</p>
			</div>
		</div>
	);
};

export default Home;
