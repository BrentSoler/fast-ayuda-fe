import React, { useState } from "react";
import { Container, Divider, Drawer, List, ListItem, Menu, MenuItem, Toolbar } from "@mui/material";
import { Navbar } from "../../components";
import { useLocation, Link } from "react-router-dom";
import { Box } from "@mui/system";
import { useUserStore } from "../../store/userStore";

const Layout = ({ children }) => {
	const [drawerOpen, setDrawerOpen] = useState(true);
	const type = useUserStore((state) => state.userType);
	const [menuOpen, setMenuOpen] = useState(false);
	const [anchor, setAnchor] = useState(null);
	const location = useLocation();
	const drawWidth = 220;
	const urls = [
		{
			name: type === "Admin" ? "Programs" : "Dashboard",
			path: type === "Admin" ? "/programs" : "/",
		},
		{ name: "Transactions", path: "/transactions" },
	];

	const handleClick = (event) => {
		setMenuOpen(!menuOpen);
		setAnchor(event.currentTarget);
		console.log(event.currentTarget);
	};

	const handleClose = () => {
		setAnchor(null);
		setMenuOpen(false);
	};

	return (
		<div className="flex flex-col">
			{location.pathname.includes("dashboard") && (
				<>
					<Box sx={{ display: { sm: "none" }, position: "relative", zIndex: 39 }}>
						<Menu
							id="menu-main"
							anchorEl={anchor}
							open={menuOpen}
							onClose={() => handleClose()}
							transformOrigin={{ vertical: "top", horizontal: "left" }}
							sx={{
								display: { xs: "flex", sm: "none" },
								justifyContent: "flex-end",
								zIndex: 40,
								position: "absolute",
								width: "max",
								height: "max",
							}}
						>
							{urls.map((url) => (
								<Link to={`/dashboard${url.path}`}>
									<MenuItem>
										<p className={`${location.pathname === url.path ? "text-main" : ""} px-3`}>
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
											E-SKEDYUL
										</p>
									)}
									{urls.map((url) => (
										<ListItem>
											<Link to={`/dashboard${url.path}`}>
												<p
													className={`${
														location.pathname === `dashboard${url.path}`
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
				menuUi={menuOpen}
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
