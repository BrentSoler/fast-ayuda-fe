import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, AboutUs, ContactUs } from "./pages/";
import { Navbar } from "./components";

const App = () => {
	return (
		<Router>
			<div className="overflow-hidden">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/contact-us" element={<ContactUs />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
