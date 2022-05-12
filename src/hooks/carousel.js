import { useState } from "react";

const useCarousel = (imgLength) => {
	const [visible, setVisible] = useState(0);

	function handleCarousel(dir) {
		setVisible((prev) => (dir === 1 ? prev + 1 : prev - 1));

		if (visible === imgLength && dir === 1) {
			setVisible(0);
		}
		if (visible === 0 && dir === 0) {
			setVisible(imgLength);
		}
	}

	function navigatorFunc(i) {
		setVisible(i);
	}

	return { visible, navigatorFunc, handleCarousel };
};

export default useCarousel;
