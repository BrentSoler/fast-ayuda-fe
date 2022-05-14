import React, { useState } from "react";
import { Container, Divider, Drawer, List, ListItem, Menu, MenuItem, Toolbar } from "@mui/material";
import { Navbar } from "../../components";
import { useLocation, Link } from "react-router-dom";
import { Box } from "@mui/system";

const Layout = ({ children }) => {
	const [drawerOpen, setDrawerOpen] = useState(true);
	const [anchor, setAnchor] = useState(null);
	const location = useLocation();
	const drawWidth = 220;
	const urls = [
		{ name: "Programs", path: "/programs" },
		{ name: "Transactions", path: "/transactions" },
	];

	const handleClick = (event) => {
		setAnchor(event.currentTarget);
		console.log(event.currentTarget);
	};

	const handleClose = () => {
		setAnchor(null);
		setDrawerOpen(false);
	};

	return (
		<div className="flex flex-col">
			{location.pathname.includes("dashboard") && (
				<>
					<Box sx={{ display: { sm: "none" }, position: "relative", zIndex: 39 }}>
						<Menu
							id="menu-main"
							anchorEl={anchor}
							open={drawerOpen}
							transformOrigin={{ vertical: "top", horizontal: "left" }}
							sx={{
								display: { xs: "flex", sm: "none" },
								justifyContent: "flex-end",
								zIndex: 39,
								position: "absolute",
								top: "4rem",
								width: "max",
								height: "max",
							}}
						>
							{urls.map((url) => (
								<Link to={`/dashboard${url.path}`}>
									<MenuItem>
										<p
											className={`${location.pathname.includes(url.path) ? "text-main" : ""} px-3`}
										>
											{url.name}
										</p>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<Box sx={{ display: { xs: "none", sm: "flex" } }}>
						<Drawer
							variant="permanent"
							sx={{ position: "static", width: drawWidth }}
							className={`transition-all ${drawerOpen ? "" : "translate-x-10"}`}
						>
							<Toolbar
								className={`bg-main h-full text-white font-pop items-start w-[${drawWidth}px] flex justify-start`}
							>
								<List>
									{drawerOpen && (
										<p className="py-3 text-xl font-bold border-b-[0.5px] border-blue-300 mb-5">
											FAST-Ayuda
										</p>
									)}
									{urls.map((url) => (
										<ListItem>
											<Link to={`/dashboard${url.path}`}>
												<p
													className={`${
														location.pathname.includes(url.path)
															? "border-white"
															: "border-transparent"
													} px-3 border-l-2`}
												>
													{url.name}
												</p>
											</Link>
										</ListItem>
									))}
								</List>
							</Toolbar>
						</Drawer>
					</Box>
				</>
			)}
			<Navbar
				path={location.pathname.includes("/dashboard")}
				setDraw={setDrawerOpen}
				draw={drawerOpen}
				w={drawWidth}
				menu={handleClick}
			/>
			{location.pathname.includes("dashboard") && (
				<>
					<Box
						sx={{ display: { xs: "none", sm: "flex" } }}
						className={`${drawerOpen ? `ml-[220px]` : ""} mt-5`}
					>
						<Container>{children}</Container>
					</Box>
					<Box sx={{ display: { xs: "flex", sm: "none" } }} className={` mt-5`}>
						<Container>{children}</Container>
					</Box>
				</>
			)}
			{!location.pathname.includes("dashboard") && <div>{children}</div>}
		</div>
	);
};

export default Layout;
