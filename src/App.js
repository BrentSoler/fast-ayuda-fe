import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from "react-router-dom";
import Layout from "./container/Layout/Layout";
import { Home, AboutUs, ContactUs, Dashboard } from "./pages/";

const App = () => {
	return (
		<Router>
			<div className="overflow-hidden">
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about-us" element={<AboutUs />} />
						<Route path="/contact-us" element={<ContactUs />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</Layout>
			</div>
		</Router>
	);
};

export default App;
