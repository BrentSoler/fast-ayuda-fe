import axios from "axios";

export default axios.create({
	baseURL: "http://localhost/E-SKEDYUL",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
});
