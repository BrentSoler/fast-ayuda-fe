import axios from "axios";

export default axios.create({
	baseURL: "http://localhost/fast-ayuda",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
});
