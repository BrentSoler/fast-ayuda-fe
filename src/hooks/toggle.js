import { useState } from "react";

export default function useToggle() {
	const [toggle, setToggle] = useState(false);

	function toggleFunc() {
		setToggle(!toggle);
	}

	return [toggle, toggleFunc];
}
