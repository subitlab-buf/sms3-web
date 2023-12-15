import "../styles/Register.css";
import SubITLogo from "../assets/subit.svg";
import { useEffect, useState } from "react";
import { Button, Select, Input, Space, Message } from "@arco-design/web-react";
import "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";

const Option = Select.Option;
const houses = ["格物", "致知", "诚意", "正心", "明德", "弘毅", "至善", "新民", "熙敬"];

function Login() {
	//scale控制模块
	const [frameScale, setFrameScale] = useState(window.innerWidth < 300 ? 0.25 : ((window.screen.availWidth - 16) / 1200));
	const changeScale = () => {
		if (window.innerWidth < 300) {
			setFrameScale(0.25);
		} else {
			setFrameScale(((window.screen.availWidth - 16) / 1200));
		}
		//调整frame1的缩放（也会调整container1的width和gap）
		//有最小宽度限制为300px，若屏幕宽度低于此则不会继续缩小
	};

	useEffect(() => {
		// 添加事件监听器
		window.addEventListener("resize", changeScale);

		// 在组件卸载时清理事件监听器
		return () => {
			window.removeEventListener("resize", changeScale);
		};
	}, []);


	//Input模块
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [username, setUsername] = useState("");
	const [college, setCollege] = useState("");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [password, setPassword] = useState("");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [confirm, setConfirm] = useState("");

	//获取并更新username

	//获取并更新username

	//获取并更新password

	//获取并更新确认的password

	//handleSubIT（雾
	function handleSubmit(e: any) {
		if (username.length <= 20 && password.length <= 20 && username.length > 0 && password.length > 0) {
			// TODO: 发送用户名与密码
			console.log(`
			username:${username}
			password:${password}`);

		} else {
			console.log("username or password is illegal");
			Message.error("用户名或密码长度过长");
		}
	}


	return (
		<div className={"container1"} style={{ height: 800 * frameScale, gap: 150 * frameScale }}>

			<div className={"frame2"} style={{ transform: `scale(${frameScale})`, }} >
				<div style={{ width: 860, height: 430, backgroundImage: "url(https://via.placeholder.com/860x430)", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "inline-flex" }}>
					<div style={{ alignSelf: " 'stretch'", height: 0, transform: "rotate(-30deg)", transformOrigin: "0 0", border: "1px solid" }} />
				</div>
				<div className={"registerPanel"}>
					<div
						style={{
							height: 59,
							background: "white",
							justifyContent: "center",
							alignItems: "center",
							display: "inline-flex",
							flexDirection: "row"
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
					<div style={{ borderWidth: 1, borderColor: "black" }}>
						<Space size={16} direction={"vertical"}>
							<Input></Input>
							<Select style={{ width: 220 }} value={college} labelInValue={false} placeholder='请选择书院' triggerProps={{ autoAlignPopupWidth: false, autoAlignPopupMinWidth: true }} onChange={(value: any) => {
								setCollege(value);
							}}>
								{houses.map(clg => <Option key={clg} value={clg}></Option>)}
							</Select>
							<Input></Input>
							<Input></Input>
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
								}}
								onClick={handleSubmit}
							>
								注册
							</Button>
						</Space>
					</div>
				</div>
			</div>



			<div style={{ width: 128, height: 22, marginTop: 0, marginLeft: "auto", marginRight: "auto", marginBottom: 15 }}>
				<p style={{
					color: "#1D2129",
					fontSize: 14,
					fontFamily: " PingFang SC",
					fontWeight: 400,
					wordWrap: "break-word",
					textAlign: "center"
				}}>
					powered by SubIT
				</p>
			</div>


		</div>
	);

}

export default Login;
