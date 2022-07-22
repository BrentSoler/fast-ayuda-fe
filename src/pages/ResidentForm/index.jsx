import ResidentEdit from "../../components/ResidentEdit";

const ResidentForm = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center gap-10 font-pop p-5">
			<div>
				<p className="text-4xl font-bold text-main">Edit Profile</p>
				<p className="mb-10 text-xl w-[30rem]">Edit your Profile here...</p>
			</div>
			<ResidentEdit />
		</div>
	);
};

export default ResidentForm;
