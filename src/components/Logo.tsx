import SubITLogo from "../assets/subit.svg";
import {Grid, Typography} from "@arco-design/web-react";

interface TypeProps {
	type: {
		collapsed:boolean
	}
}

const Logo = ({ type }:TypeProps) => {

	if(type.collapsed) {
		if(document.body.getAttribute("arco-theme") !== "dark"){
			return ( <div style={{padding:5,height:59,justifyContent: "center", alignItems: "center", display: "inline-flex", flexDirection:"column"}}>
				<img src={SubITLogo} style={{width:"100%", maxWidth:60}}/>
			</div>);
		}else {
			return ( <div style={{padding:5,height:59,justifyContent: "center", alignItems: "center", display: "inline-flex", flexDirection:"column"}}>
				<img src={SubITLogo} style={{width:"100%", maxWidth:60}}/>
			</div>);
		}
	}else {
		if(document.body.getAttribute("arco-theme") !== "dark"){
			return (<Grid.Row
				style={{
					borderRadius:15,
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
							background: "linear-gradient(0deg, 0%, 100%)"
						}}
						src={SubITLogo}
					/>
				</div>
				<div>
					<Typography.Text style={{fontWeight:500,fontSize:16}}>
						大屏管理系统
					</Typography.Text>
				</div>
			</Grid.Row>);
		}else {
			return (
				<Grid.Row
					style={{
						borderRadius:15,
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
								filter:"revert"
							}}
							src={SubITLogo}
						/>
					</div>
					<div>
						<Typography.Text style={{fontWeight:500,fontSize:16}}>
							大屏管理系统
						</Typography.Text>
					</div>
				</Grid.Row>
			);
		}
	}
};

export default Logo;