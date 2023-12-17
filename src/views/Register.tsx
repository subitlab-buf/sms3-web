import "../styles/Register.css";
import Logo from "../components/Logo";
import tempImg from "../assets/860x430.png";
import { useState, useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Button, Input, Space, Grid, Message, Typography} from "@arco-design/web-react";
import "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import {IconLeft, IconUser} from "@arco-design/web-react/icon";


function Login() {
	//验证码倒计时

	const [countdown, setCountdown] = useState(60);
	const [isCounting, setIsCounting] = useState(false);

	const sendCaptcha = () => {
		const emailTest =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if(emailTest.test(email)){
			//TODO: 向后端发送注册验证邮箱邮件（/auth/registerCaptcha）
			let msg = {
				"email":email
			};
			console.log(msg);
			//then
			setIsCounting(true);
			//Message.success("已发送验证码");

			//catch
			//Message.error("验证码发送失败");
		}
	};


	useEffect(() => {
		let timer:any;

		if (isCounting && countdown > 0) {
			timer = setInterval(() => {
				setCountdown((prevCountdown) => prevCountdown - 1);
			}, 1000);
		}

		return () => {
			clearInterval(timer);
		};
	}, [isCounting, countdown]);

	useEffect(() => {
		if (countdown === 0) {
			setIsCounting(false);
			setCountdown(60); // 重置倒计时
		}
	}, [countdown]);

	//Input部分

	const [panel, setPanel] = useState("1-1");

	//panel-1
	const [realName, setRealName] = useState("");
	const [sId, setSId] = useState("");
	const [email, setEmail] = useState("");
	const [captcha, setCaptcha] = useState("");

	function next() {
		//setPanel("1-2");
		if(username.length > 0){
			if(password.length !== 0){
				if(password === confirm){
					setPanel("1-2");
				}else {
					Message.error("两次密码不一致");
				}
			}else {
				Message.error("请填写密码");
			}
		}else {
			Message.error("请填写用户名");
		}
	}

	function finalReg() {
		const rNameTest = /^[\u4e00-\u9fa5]{2,4}$/;
		const SIdTest = /^[0-9]{7}$/;
		const emailTest =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if(rNameTest.test(realName)){
			if(SIdTest.test(sId)){
				if (emailTest.test(email)){
					//TODO:向后端发送注册请求（/auth/register）
					let msg = {
						"username": username,
						"password": password,
						"realName": realName,
						"email": email,
						"sid": sId,
						"department": "01",
						"captcha": captcha
					};
					console.log(msg);
				}else {
					Message.error("邮箱格式错误");
				}
			}else {
				Message.error("学号格式错误");
			}
		}else {
			Message.error("姓名格式错误");
		}
	}



	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [username, setUsername] = useState("");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [password, setPassword] = useState("");
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [confirm, setConfirm] = useState("");


	//获取并更新username

	//获取并更新username



	return (
		<div className={"container1"} style={{ height:"100vh", width:"100vw", backgroundColor:"var(--color-fill-1)"}}>

			<Grid.Row style={{height:"calc(132 / 800 *100vh)", width:"100%",}}>

			</Grid.Row>

			<Grid.Row justify={"center"} align={"center"} style={{height:"calc(536 / 800 *100vh)", width:"100%"}}>
				<div className={"frame2"} style={{backgroundColor:"var(--color-white)"}}>
					<img src={tempImg} style={{height:"80%"}}/>
					<div className={"register-panel"} style={{
						position:"absolute",
						justifyContent: "center",
						alignItems: "center",
						display: "inline-flex",
						flexDirection: "column"}}>
						<Logo/>
						<Button className={`btn-${(panel === "1-2" ? "show" : "fade")}`} type={"default"} shape={"round"} size={"large"} icon={<IconLeft/>} style={{position:"absolute",marginRight:"80%",marginBottom:"53%"}} onClick={() => {setPanel("2-1");}}></Button>
						<div style={{width:"80%",height:"90%",overflow:"hidden"}}>
							<Grid.Row justify="space-around" style={{width:"200%",height:"80%"}} className={`panel-${panel}`} align={"center"}>
								<Grid.Col span={8} style={{display:"flex",flexDirection:"column", alignItems:"center",height:"100%",justifyContent:"space-between"}}>
									<Input style={{width:"45%", minWidth:220}} size={"large"} prefix={<IconUser/>} placeholder={"请输入用户名"} onChange={(value: string, e) => {setUsername(value);}}>
									</Input>
									<Input.Password style={{marginTop:2,width:"45%", minWidth:220}} size={"large"}placeholder={"请输入密码"} onChange={(value: string, e) => {setPassword(value);}}>
									</Input.Password>
									<Input.Password visibility={false} style={{marginTop:2,width:"45%", minWidth:220}} size={"large"} placeholder={"请确认你的密码"} onChange={(value: string, e) => {setConfirm(value);}}>
									</Input.Password>
									<div style={{marginTop:2,height:32,width:"45%",minWidth:220}}>
									</div>
									<Button
										type={"primary"}
										size={"large"}
										style={{
											marginTop:5,
											paddingTop: 5,
											paddingBottom: 5,
											paddingLeft: 16,
											paddingRight: 16,
											fontSize: 14,
											width:"45%",
											minWidth:220,
											borderRadius: 5,
										}}
										onClick={next}
									>
										下一步
									</Button>
								</Grid.Col>
								<Grid.Col span={8} style={{display:"flex",flexDirection:"column", alignItems:"center",height:"100%",justifyContent:"space-between"}}>
									<Input style={{width:"45%", minWidth:220}} size={"large"}  placeholder={"请输入真实姓名"} onChange={(value: string, e) => {setRealName(value);}}>
									</Input>
									<Input style={{marginTop:2,width:"45%", minWidth:220}} size={"large"} placeholder={"请输入学号"} onChange={(value: string, e) => {setSId(value);}}>
									</Input>
									<Input value={email} style={{marginTop:2,width:"45%", minWidth:220}} size={"large"} placeholder={"请输入邮箱"} onChange={(value: string, e) => {setEmail(value);}}>
									</Input>
									<div style={{marginTop:2,width:"45%", minWidth:220}}>
										<Input value={captcha} style={{width:"100%", minWidth:220}} size={"large"} placeholder={"请输入验证码"} maxLength={6} onChange={(value: string, e) => {setCaptcha(value);}}>
										</Input>
										{isCounting ?
											<Button loading={true} style={{width: 110,transform:"translate(-114px)", marginTop:4,position:"absolute"}} size={"small"} type={"primary"}>
												已发送{countdown}s
											</Button>
											:
											<Button loading={false} onClick={sendCaptcha} style={{width: 110,transform:"translate(-114px)", marginTop:4,position:"absolute"}} size={"small"} type={"primary"}>
											获取验证码
											</Button>}
									</div>
									<Button
										type={"primary"}
										size={"large"}
										style={{
											marginTop:5,
											paddingTop: 5,
											paddingBottom: 5,
											paddingLeft: 16,
											paddingRight: 16,
											fontSize: 14,
											width:"45%",
											minWidth:220,
											borderRadius: 5,
										}}
										onClick={finalReg}
									>
											注册
									</Button>
								</Grid.Col>
							</Grid.Row>
						</div>
					</div>
				</div>

			</Grid.Row>


			<Grid.Row style={{ width:"100%", height:"calc(132 / 800 *100vh)"}} align={"end"} justify={"center"}>
				<div style={{
					marginBottom:15
				}}>
					<Typography.Text>
						powered by SubIT
					</Typography.Text>
				</div>
			</Grid.Row>


		</div>
	);

}

export default Login;
