import "../styles/Login.css";
import SubITLogo from "../assets/subit.svg";
import { Button, Carousel, Input, Space } from "@arco-design/web-react";
import {
	IconUser,
	IconInfoCircle,
	IconSwap,
} from "@arco-design/web-react/icon";
import "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";

const imageSrc = [
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
];

function Login() {
	return (
		<div className={"container1"}>
			<div className={"frame1"}>
				<div style={{ width: 572, height: 350, float: "left" }}>
					<Carousel
						indicatorType={"dot"}
						indicatorPosition={"right"}
						showArrow="never"
						autoPlay={true}
						className={"carousel"}
						style={{ clear: "none" }}>
						{imageSrc.map((src, index) => (
							<div key={index}>
								<img src={src} style={{ width: "100%", height: "100%" }} />
							</div>
						))}
					</Carousel>
				</div>

				<div className={"login-panel"}>
					<div
						style={{
							width: 185,
							height: 59,
							background: "white",
							justifyContent: "center",
							alignItems: "center",
							display: "inline-flex",
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
					<div style={{ marginTop: 32, gap: 32 }}>
						<Space direction={"vertical"} size={15}>
							<Space>
								<Input
									style={{ width: 220, borderRadius: 5 }}
									prefix={<IconUser />}
									suffix={<IconInfoCircle />}
									placeholder="请输入用户名"
									maxLength={{ length: 20, errorOnly: true }}
								/>
							</Space>
							<Space>
								<Input.Password
									style={{ width: 220, borderRadius: 5 }}
									suffix={<IconInfoCircle />}
									placeholder="请输入密码"
									maxLength={{ length: 20, errorOnly: true }}
								/>
							</Space>
							<Space style={{ marginTop: 10 }}>
								<Button
									type={"primary"}
									size={"large"}
									style={{
										paddingTop: 5,
										paddingBottom: 5,
										paddingLeft: 16,
										paddingRight: 16,
										fontSize: 14,
										width: 220,
										borderRadius: 5,
									}}>
                  登录
								</Button>
							</Space>
							<Space>
								<Button
									type={"text"}
									style={{
										width: 92,
										height: 20,
										fontSize: 12,
										float: "right",
									}}>
									<IconSwap />
                  忘记密码
								</Button>
								<Button
									type={"text"}
									style={{
										width: 92,
										height: 20,
										marginLeft: 5,
										fontSize: 12,
										float: "right",
									}}>
									<IconSwap />
                  管理员登录
								</Button>
							</Space>
						</Space>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
