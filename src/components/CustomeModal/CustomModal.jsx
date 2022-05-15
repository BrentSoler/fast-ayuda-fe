import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CustomeModal = ({ state, close, textHeader, textMain, linkBack }) => {
	return (
		<Modal open={state} onClose={close}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "min(25rem)",
					bgcolor: "background.paper",
					boxShadow: 24,
					p: 4,
					display: "flex",
					flexDirection: "column",
					gap: 3,
				}}
			>
				<Typography variant="h4" sx={{ marginBottom: 3, fontFamily: "Poppins", fontWeight: 700 }}>
					{textHeader}
				</Typography>
				<Typography variant="h6" sx={{ textAlign: "center", fontFamily: "Poppins" }}>
					{textMain}
				</Typography>
				{linkBack && (
					<Link to={linkBack}>
						<Button variant="contained">Go Back</Button>
					</Link>
				)}
			</Box>
		</Modal>
	);
};

export default CustomeModal;
