import React, {useEffect, useState} from "react";
import { Button, Carousel, Input, Space, Layout, Message} from "@arco-design/web-react";
import { IconUser, IconInfoCircle, IconSwap} from "@arco-design/web-react/icon";
import "../styles/UserLogin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../components/Logo"; //导入自定义的logo组件


//轮播图片临时替换
const imageSrc = [
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
	"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp"
];


//GPT拉的屎（确信
const UserLogin: React.FC = () => {
	//定义useNavigate，页面跳转用函数
	const navigate= useNavigate();

	//声明用户登录所需要填写的邮箱与用户名
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//处理用户输入Email，更新email的值，更新输入框value显示
	const handleChangeEmail = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(value);
	};

	//同理
	const handleChangePassword = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(value);
	};

	//处理用户点击登录的
	const handleSubmit = () => {

		//调试用
		console.log(`Email: ${email}, Password: ${password}`);
		//发送登录请求
		axios.post("http://182.92.67.83:10718/auth/login",{
			email:email,
			password:password
		})
			.then(res=>{
				if(res.data.code===10000){
					//登录成功
					Message.info("登录成功");
					//存储token
					localStorage.setItem("token", res.data.token);
					//跳转到工作台
					navigate("/dashboard");
				} else if(res.data.code===30003){
					//错误1：提示邮箱与密码不匹配（30003："Username Password Not Match"）
					Message.error("邮箱与密码不匹配");
				} else if(res.data.code===30001){
					//错误2：提示用户被封禁（30001："Blocked To Login"）
					Message.error("用户被封禁");
				} else{
					//以上情况之外，均不予登录
					Message.error("登录失败");
				}
			})
			.catch(err=>{
				//如果发送post失败，也不予登录
				Message.error("登录失败");
			});
	};

	//检测用户此前是否已登录（已保存token），如果已有则直接跳转到工作台
	//此处只会在组件挂载时执行一次
	useEffect(() => {
		try {
			//尝试获取token
			let token = localStorage.getItem("token");
			//尝试获取用户信息，如果成功则说明token有效，则跳转工作台
			axios.get("http://182.92.67.83:10718/user/getInfo", {
				headers: {
					"Authorization": "Bearer" + token,
				}
			}).then(res => {
				if(res.data.code === 10000){
					navigate("/dashboard");
				}
			}).catch(err => {
				console.log(err);
			});
		}catch (error){
			console.log(error);
		}
	}, []);

	//页面部分
	return (
		<Layout className="layout">
			<Layout.Content style={{width:"100%"}}>
				<div className="main-frame">
					<div className="carousel-container">
						{
							//图片轮播
						}
						<Carousel
							className="carousel"
							indicatorType="dot"
							indicatorPosition="right"
							showArrow="never"
							autoPlay
						>
							{imageSrc.map((src, index) => (
								<div key={index}>
									<img src={src} className={"img"} alt={`carousel-${index}`} />
								</div>
							))}
						</Carousel>
					</div>
					<div className="login-container">
						<div className="login-space" >
							<Space align="center">
								<Logo type={{collapsed:false}}/>
								{
									//登录输入框
								}
							</Space>
							<Input
								className={"login-forms"}
								size={"large"}
								prefix={<IconUser />}
								suffix={<IconInfoCircle />}
								placeholder="请输入邮箱"
								value={email}
								onChange={handleChangeEmail}
							/>
							<Input.Password
								className={"login-forms"}
								placeholder="请输入密码"
								value={password}
								onChange={handleChangePassword}
							/>
							<Button type="primary" size="large" className="login-forms" onClick={handleSubmit}>
								登录
							</Button>
							<div className={"login-forms"} style={{display:"flex", flexDirection:"row", justifyContent:"space-around",marginTop:"5%"}}>
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
							</div>
						</div>
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
