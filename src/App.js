import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, AboutUs, ContactUs } from "./pages/";
import { Navbar } from "./components";
import Transactions from "./pages/Transactions/Transactions";
import Programs from "./pages/Programs/Programs";

const App = () => {
	return (
		<Router>
			<div className="overflow-hidden">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/programs" element={<Programs />} />
					<Route path="/transactions" element={<Transactions />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
