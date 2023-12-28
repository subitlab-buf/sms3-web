import React, { useState } from "react";
import { Button, Carousel, Input, Space, Layout, Message} from "@arco-design/web-react";
import { IconUser, IconInfoCircle, IconSwap} from "@arco-design/web-react/icon";
import "../styles/UserLogin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo";

const imageSrc = [
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp"
];

const UserLogin: React.FC = () => {
	const navigate= useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChangeEmail = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(value);
	};

	const handleChangePassword = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(value);
	};


	const handleSubmit = () => {
		// Your submission logic...
		console.log(`Username: ${email}, Password: ${password}`);
		axios.post("http://182.92.67.83:10718/auth/login",{
			email:email,
			password:password
		})
			.then(res=>{
				if(res.data.code===10000){
					Message.info("登录成功");
					localStorage.setItem("token","Bearer"+res.data.token);
					navigate("/dashboard");
				} else if(res.data.code===30003){
					Message.error("邮箱或密码错误");
				} else if(res.data.code===30001){
					Message.error("用户被封禁");
				} else{
					Message.error("登录失败");
				}
			})
			.catch(err=>{
				Message.error("登录失败");
			});
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
									<img src={src} style={{ height: "100%" }} alt={`carousel-${index}`} />
								</div>
							))}
						</Carousel>
					</div>
					<div className="login-container">
						<Space direction="vertical" size="large" className="login-space">
							<Space align="center">
								<Logo type={{collapsed:false}}/>
							</Space>
							<Input
								prefix={<IconUser />}
								suffix={<IconInfoCircle />}
								placeholder="请输入邮箱"
								value={email}
								onChange={handleChangeEmail}
							/>
							<Input.Password
								placeholder="请输入密码"
								value={password}
								onChange={handleChangePassword}
							/>
							<Button type="primary" size="large" className="login-button" onClick={handleSubmit}>
								登录
							</Button>
							<Space>
								<Button
									type={"text"}
									onClick={()=>{navigate("");}}
								>
									<IconSwap fontSize={12}/>
									忘记密码
								</Button>
								<Button
									type={"text"}
									onClick={() => {navigate("/register");}}
								>
									<IconSwap fontSize={12}/>
									注册用户
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
