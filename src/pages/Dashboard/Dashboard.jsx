import React from "react";
import Default from "../../assets/default.png";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import { usePrograms } from "../../hooks/dataHooks/programs";

const Dashboard = () => {
	const { data, isLoading, isSuccess, isError } = usePrograms();

	return (
		<div>
			Dashboard
			<div className="flex gap-3 flex-wrap">
				{isSuccess &&
					data.data.data.map((prog) => (
						<DashboardCard
							name={prog.name}
							type={prog.type}
							dateCreated={prog.program_created}
							status={prog.program_status}
							details={prog.details}
							sector={prog.required_sector}
						/>
					))}
			</div>
			<div className="flex flex-col  items-center p-5 font-pop gap-3 mb-5 mt-10">
				<h1 className="text-main text-4xl font-bold">About Us</h1>
				<div className="md:flex pb-9 gap-3">
					<img src={Default} alt="" className="w-[15rem]" />
					<img src={Default} alt="" className="w-[15rem]" />
					<img src={Default} alt="" className="w-[15rem]" />
					<img src={Default} alt="" className="w-[15rem]" />
				</div>
				<h1 className="text-2xl text-main text-center">
					We are champions that help for a better future
				</h1>
				<p className="w-[min(90%,50rem)] text-center text-lg">
					Dedicated to the well being - of all people and guided by science and technology, The
					E-SKEDYUL leads and champions global effort to give everyopne, everywhere an equal chance
					to live an efficient life
				</p>
			</div>
		</div>
	);
};

export default Dashboard;
