import SubITLogo from "../assets/subit.svg";

function Logo() {
	return (
		<div
			style={{
				height: 59,
				background: "white",
				justifyContent: "center",
				alignItems: "center",
				display: "inline-flex",
				flexDirection:"row"
			}}>
			<div
				style={{
					height: 35,
					paddingTop: 3,
					paddingBottom: 3,
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
			<div
				style={{
					color: "#1D2129",
					fontSize: 16,
					fontWeight: 500,
					fontFamily: "PingFang SC",
					wordWrap: "break-word",
				}}>
				大屏管理系统
			</div>
		</div>
	);
}

export default Logo;
