import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./container/Layout/Layout";
import { Home, ContactUs, Dashboard } from "./pages/";
import Transactions from "./pages/Transactions/Transactions";
import Programs from "./pages/Programs/Programs";
import { QueryClient, QueryClientProvider } from "react-query";
import TransactionForm from "./pages/TransacForm/TransacForm";
import { ReactQueryDevtools } from "react-query/devtools";
import ProgramFormPage from "./pages/ProgramFormPage/ProgramFormPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import LoginProtection from "./Authentication/ProtectedRoutes/Login";
import LogoutProtection from "./Authentication/ProtectedRoutes/Logout";
import ProfilePage from "./pages/ProfilePage";
import ResidentsPage from "./pages/ResidentsPage";
import ResidentForm from "./pages/ResidentForm";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const client = new QueryClient();
	return (
		<QueryClientProvider client={client}>
			<Router>
				<div className="overflow-hidden">
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route element={<LogoutProtection />}>
								<Route path="/login" element={<LoginPage />} />
								<Route path="/signup" element={<SignUpPage />} />
							</Route>
							<Route element={<LoginProtection />}>
								<Route path="/dashboard/contact-us" element={<ContactUs />} />
								<Route path="/dashboard/residents" element={<ResidentsPage />} />
								<Route path="/dashboard/appointment" element={<TransactionForm />} />
								<Route path="/dashboard/addprogram" element={<ProgramFormPage />} />
								<Route path="/dashboard/profile" element={<ProfilePage />} />
								<Route path="/dashboard/profile/edit" element={<ResidentForm />} />
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/dashboard/programs" element={<Programs />} />
								<Route path="/dashboard/transactions" element={<Transactions />} />
							</Route>
						</Routes>
					</Layout>
				</div>
			</Router>
			<ToastContainer />
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default App;
