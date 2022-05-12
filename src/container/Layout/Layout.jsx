import React, { useState } from "react";
import { Container, Divider, Drawer, List, ListItem, Menu, MenuItem, Toolbar } from "@mui/material";
import { Navbar } from "../../components";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/system";

const Layout = ({ children }) => {
	const [drawerOpen, setDrawerOpen] = useState(true);
	const location = useLocation();

	return (
		<div className="flex flex-col relative">
			{location.pathname.includes("dashboard") && (
				<>
					<Box sx={{ display: { xs: "none", sm: "flex" } }}>
						<Drawer
							variant="permanent"
							sx={{ position: "static", width: 240 }}
							className={`transition-all ${drawerOpen ? "" : "translate-x-10"}`}
						>
							<Toolbar className="bg-main h-full text-white font-pop items-start">
								<List>
									{drawerOpen && (
										<p className="py-3 text-xl font-bold border-b-[0.5px] border-blue-300">
											FAST-Ayuda
										</p>
									)}
									<Divider className="mt-5 mb-3">
										<ListItem>
											<p>Lorem ipsum dolor</p>
										</ListItem>
									</Divider>
									<Divider className="mb-3">
										<ListItem>
											<p>Lorem ipsum dolor</p>
										</ListItem>
									</Divider>
									<Divider className="mb-3">
										<ListItem>
											<p>Lorem ipsum dolor</p>
										</ListItem>
									</Divider>
								</List>
							</Toolbar>
						</Drawer>
					</Box>
					<Box sx={{ display: { xs: "absolute", sm: "none" }, zIndex: 39, top: 10 }}>
						<Menu
							open={drawerOpen}
							handleClose={() => setDrawerOpen(false)}
							sx={{ display: { xs: "absolute", sm: "none" }, zIndex: 39, top: -50 }}
						>
							<MenuItem>
								<p>Lorem ipsum dolor</p>
							</MenuItem>
							<MenuItem>
								<p>Lorem ipsum dolor</p>
							</MenuItem>
							<MenuItem>
								<p>Lorem ipsum dolor</p>
							</MenuItem>
						</Menu>
					</Box>
				</>
			)}
			<Navbar
				path={location.pathname.includes("/dashboard")}
				setDraw={setDrawerOpen}
				draw={drawerOpen}
			/>
			{location.pathname.includes("dashboard") && (
				<>
					<Box
						sx={{ display: { xs: "none", sm: "flex" } }}
						className={`${drawerOpen ? "ml-[240px]" : ""} mt-5`}
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
