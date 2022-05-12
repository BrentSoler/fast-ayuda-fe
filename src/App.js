
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from "react-router-dom";
import Layout from "./container/Layout/Layout";
import { Home, AboutUs, ContactUs, Dashboard } from "./pages/";
import { Navbar } from "./components";
import Transactions from "./pages/Transactions/Transactions";
import Programs from "./pages/Programs/Programs";

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
             <Route path="/programs" element={<Programs />} />
					  <Route path="/transactions" element={<Transactions />} />
					</Routes>
				</Layout>

				<Navbar />
			</div>
		</Router>
	);
};

export default App;
