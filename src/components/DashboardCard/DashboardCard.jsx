import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useServiceType } from "../../store/userStore";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const DashboardCard = ({ name, type, sector, dateCreated, details, status }) => {
	const [expanded, setExpanded] = React.useState(false);
	const changeHandler = useServiceType((state) => state.changeHandler);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ maxWidth: 450, minWidth: 334 }}>
			<CardHeader
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={name}
				subheader={dateCreated}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{`Type:${type}`}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{`Sector:${sector}`}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{`Status:${status}`}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Details:</Typography>
					<Typography paragraph>{details}</Typography>
				</CardContent>
				<Button onClick={() => changeHandler(name)}>
					<Link to="/dashboard/appointment">Apply</Link>
				</Button>
			</Collapse>
		</Card>
	);
};

export default DashboardCard;
