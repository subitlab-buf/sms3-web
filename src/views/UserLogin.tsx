import React, { useState } from "react";
import { Button, Carousel, Input, Space, Layout } from "@arco-design/web-react";
import { IconUser, IconInfoCircle, IconSwap} from "@arco-design/web-react/icon";
import "../styles/Login.css";
import SubITLogo from "../assets/subit.svg";
import { useNavigate } from "react-router-dom";

const imageSrc = [
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp"
];

const UserLogin: React.FC = () => {
	const navigate= useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleChangeUserName = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(value);
	};

	const handleChangePassword = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(value);
	};


	const handleSubmit = () => {
		// Your submission logic...
		console.log(`Username: ${username}, Password: ${password}`);
		// Navigate to main page if credentials are correct
		// navigate('/mainpage');
	};

	return (
		<Layout className="layout">
			<Layout.Content>
				<div className="main-frame">
					<div className="carousel-container">
						<Carousel
							className="carousel"
							indicatorType="dot"
							indicatorPosition="right"
							showArrow="never"
							autoPlay
						>
							{imageSrc.map((src, index) => (
								<div key={index}>
									<img src={src} style={{ width: "100%", height: "100%" }} alt={`carousel-${index}`} />
								</div>
							))}
						</Carousel>
					</div>
					<div className="login-container">
						<Space direction="vertical" size="large" className="login-space">
							<Space align="center">
								<img
									style={{
										width: 60,
										height: 30,
										paddingTop: 6
									}}
									src={SubITLogo}
									alt=""
								/>
								<div
									style={{
										fontSize: "large",
										fontWeight: "bold",
									}}>
									大屏管理系统
								</div>
							</Space>
							<Input
								prefix={<IconUser />}
								suffix={<IconInfoCircle />}
								placeholder="请输入用户名"
								value={username}
								onChange={handleChangeUserName}
							/>
							<Input.Password
								placeholder="请输入密码"
								value={password}
								onChange={handleChangePassword}
							/>
							<Button type="primary" size="large" onClick={handleSubmit}>
								登录
							</Button>
							<Space>
								<Button
									type={"text"}
								>
									<IconSwap fontSize={12}/>
									忘记密码
								</Button>
								<Button
									type={"text"}
									onClick={() => {navigate("/administratorlogin");}}
								>
									<IconSwap fontSize={12}/>
									管理员登录
								</Button>
							</Space>
						</Space>
					</div>
				</div>
			</Layout.Content>
			<Layout.Footer className="footer">
				powered by SubIT
			</Layout.Footer>
		</Layout>
	);
};

export default UserLogin;
