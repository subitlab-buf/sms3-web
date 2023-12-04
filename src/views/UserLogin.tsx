import "../styles/Login.css";
import SubITLogo from "../assets/subit.svg";
import {useState} from "react";
import { Button, Carousel, Input, Space, Message, Grid, Layout} from "@arco-design/web-react";
import { useNavigate } from "react-router-dom";
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

	//Input模块
	const  navigate = useNavigate();
	const[username, setUsername] = useState("");
	const[password, setPassword] = useState("");

	function handleChangeUserName(e:any){
		let username = e.target.value;
		setUsername(username);
	}
	//获取并更新username
	function handleChangePassword(e:any){
		let userPass = e.target.value;
		setPassword(userPass);
	}
	//获取并更新password

	//handleSubIT（雾
	function handleSubmit(_e:any){
		if(username.length >0 && password.length>0){
			//首先判断是否为空
			if (username.length <= 20 && password.length <= 20 ){
				//发送用户名与密码
				console.log(`
			username:${username}
			password:${password}`);
				navigate("/mainpage");
			}else {
				Message.error("用户名或密码长度过长");
			}
		}else {
			if(username.length > 0){
				Message.error("请输入密码");
			}
			else {
				Message.error("请输入用户名");
			}
		}
	}


	return (
		<Layout style={{height:"100vh", backgroundColor: "var(--color-fill-2)"}}>
			<Layout.Content>
				<Grid.Row style={{height:"100%"}}>
					<Grid.Col span={5}/>
					<Grid.Col span={14} style={{height:"100%"}}>
						<div className={"main-frame"}>
							<Grid.Row>
								<Grid.Col span={10}>
									<Carousel
										indicatorType={"dot"}
										indicatorPosition={"right"}
										showArrow="never"
										autoPlay={true}
									>
										{imageSrc.map((src, index) => (
											<div key={index}>
												<img src={src} style={{ width: "100%", height: "100%" }} alt=""/>
											</div>
										))}
									</Carousel>
								</Grid.Col>
								<Grid.Col span={14}>
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
									<Space direction={"vertical"}>
										<Input
											prefix={<IconUser />}
											suffix={<IconInfoCircle />}
											placeholder="请输入用户名"
											value={username}
											onChange={(_value: string, e) => handleChangeUserName(e)}
											onPressEnter={e => handleChangeUserName(e)}

										/>
										<Input.Password
											placeholder="请输入密码"
											value={password}
											onChange={(_value: string, e) => handleChangePassword(e)}
											onPressEnter={e => handleChangePassword(e)}
										/>
										<Button
											type={"primary"}
											size={"large"}
											onClick={handleSubmit}
										>
												登录
										</Button>
									</Space>
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
								</Grid.Col>
							</Grid.Row>
						</div>
					</Grid.Col>
					<Grid.Col span={5}/>
				</Grid.Row>
			</Layout.Content>
			<Layout.Footer>
				<p
					style={{
						textAlign: "center",
						fontFamily: "Lucida Grande"
					}}>
			powered by SubIT
				</p>
			</Layout.Footer>
		</Layout>
	);

}

export default Login;
