import axios from "axios";

export default axios.create({
	baseURL: "http://localhost/eskedyul-be",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
});
