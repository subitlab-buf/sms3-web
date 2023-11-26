import "../styles/Login.css";
import SubITLogo from "../assets/subit.svg";
import {useEffect, useState} from "react";
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

function Login()
{
	const changeScale = () => {

		document.body.style.transformOrigin = "left top";
		//修改缩放中心
		if(window.innerWidth < 300){
			document.body.style.scale = String(0.25);
		}else{
			document.body.style.scale = String(((window.innerWidth - 16) / 1200));
		}
		//修改屏幕缩放,但是控制缩放范围
	};

	changeScale();

	useEffect(() => {
		// 添加事件监听器
		window.addEventListener("resize", changeScale);

		// 在组件卸载时清理事件监听器
		return () => {
			window.removeEventListener("resize", changeScale);
		};
	}, []);


	return (
		<div className={"container1"} >

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
					<div>
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
						</Space>
					</div>
				</div>
				<Space style={{float:"left",marginLeft:671,marginTop: -75}}>
					<Button
						type={"text"}
						style={{
							width: 96,
							height: 24,
							fontSize: 12,
							fontWeight:400,
							float: "right",
						}}>
						<IconSwap fontSize={12}/>
						忘记密码
					</Button>
					<Button
						type={"text"}
						style={{
							width: 104,
							height: 24,
							marginLeft: 5,
							fontSize: 12,
							fontWeight:400, alignItems: "center",
						}}>
						<IconSwap fontSize={12}/>
						管理员登录
					</Button>
				</Space>
			</div>

			<div style={{width:128,height:22,marginTop:0,marginLeft:"auto",marginRight:"auto",marginBottom:15}}>
				<p style={{color: "#1D2129",
					fontSize: 14,
					fontFamily:" PingFang SC",
					fontWeight: 400,
					wordWrap: "break-word",
					textAlign:"center"}}>
					powered by SubIT
				</p>
			</div>
		</div>
	);

}

export default Login;
