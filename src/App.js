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

const App = () => {
	const client = new QueryClient();
	return (
		<QueryClientProvider client={client}>
			<Router>
				<div className="overflow-hidden">
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/contact-us" element={<ContactUs />} />
							<Route path="/appointment" element={<TransactionForm />} />
							<Route path="/addprogram" element={<ProgramFormPage />} />
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/dashboard/programs" element={<Programs />} />
							<Route path="/dashboard/transactions" element={<Transactions />} />
						</Routes>
					</Layout>
				</div>
			</Router>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default App;
