import { useGetUser } from "../../hooks/dataHooks/users";
import { useUserStore } from "../../store/userStore";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProfilePage = () => {
	const user = useUserStore((state) => state.user);
	const { data, isSuccess } = useGetUser(user.user_id);

	console.log(data);
	return (
		<div className="flex flex-col justify-center gap-4 h-[80vh] font-pop">
			<h1 className="self-center font-bold text-5xl font-pop">My Profile</h1>
			{isSuccess && (
				<>
					<div className="flex gap-2 items-end">
						<h1 className="font-bold text-3xl text-main">Name:</h1>
						<h1 className="font-semibold text-xl">{`${data.last_name},${data.first_name} ${data.middle_name}`}</h1>
					</div>
					<div className="flex gap-2 items-end">
						<h1 className="font-bold text-3xl text-main">Email:</h1>
						<h1 className="font-semibold text-xl">{`${data.email}`}</h1>
					</div>
					<div className="flex gap-2 items-end">
						<h1 className="font-bold text-3xl text-main">Mobile No. :</h1>
						<h1 className="font-semibold text-xl">{`${data.mobile_number}`}</h1>
					</div>
					<div className="flex gap-2 items-end">
						<h1 className="font-bold text-3xl text-main">Birthday:</h1>
						<h1 className="font-semibold text-xl">{`${data.birthday}`}</h1>
					</div>
					<div className="flex gap-2 items-end">
						<h1 className="font-bold text-3xl text-main">Gender:</h1>
						<h1 className="font-semibold text-xl">{`${data.gender}`}</h1>
					</div>
					<div className="flex gap-2 items-end">
						<h1 className="font-bold text-3xl text-main">Address:</h1>
						<h1 className="font-semibold text-xl">{`${data.unit_number},${data.lot_and_block_number} ${data.street} ${data.barangay}`}</h1>
					</div>
					<div className="self-end">
						<Link to="/dashboard/profile/edit">
							<Button variant="contained">Edit My Profile</Button>
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default ProfilePage;
