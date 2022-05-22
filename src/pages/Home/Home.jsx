import React from "react";
import CarouselOne from "../../components/CarouselOne/CarouselOne";
import { pic1, pic2, pic3, pic4 } from "../../assets";

const Home = () => {
	const picsArr = [pic1, pic2, pic3, pic4];

	return (
		<div className="">
			<CarouselOne pics={picsArr} interval={10} />
		</div>
	);
};

export default Home;
