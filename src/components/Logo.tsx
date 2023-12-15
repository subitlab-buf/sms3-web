import SubITLogo from "../assets/subit.svg";
import {Grid, Typography} from "@arco-design/web-react";

function Logo() {
	return (
		<Grid.Row
			style={{
				minWidth:200,
				padding:5,
				height: 59,
				justifyContent: "center",
				alignItems: "center",
				display: "inline-flex",
				flexDirection:"row"
			}}>
			<div
				style={{
					height: 35,
					paddingRight: 3,
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: 10,
					display: "inline-flex",
				}}>
				<img
					style={{
						width: 60,
						height: 30,
						background: "linear-gradient(0deg, 0%, 100%)",
					}}
					src={SubITLogo}
				/>
			</div>
			<div>
				<Typography.Text>
					大屏管理系统
				</Typography.Text>
			</div>
		</Grid.Row>
	);
}

export default Logo;