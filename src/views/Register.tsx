import "../styles/Register.css";
import Logo from "../components/Logo";
import tempImg from "../assets/860x430.png";
import { useState, useEffect } from "react";
import { Select } from "@arco-design/web-react";
import {Button, Input, Grid, Message, Typography} from "@arco-design/web-react";
import "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import {IconLeft, IconUser} from "@arco-design/web-react/icon";
import axios from "axios";
import {useNavigate} from "react-router-dom";
//导入模块

function Login() {
	const navigate= useNavigate();
	const Option = Select.Option;

	//验证码倒计时部分
	//声明倒计时所需的变量
	const [countdown, setCountdown] = useState(300);
	const [isCounting, setIsCounting] = useState(false);
	const [isSending, setIsSending] = useState(false);

	//发送该死的验证码
	const sendCaptcha = () => {
		//邮箱正则，前端第一层检测邮箱输入是否合法
		const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		//如果邮箱合法，则发送发送验证码请求
		if(emailTest.test(email)){
			setIsSending(true); // 开始发送请求
			axios.post("http://182.92.67.83:10718/auth/registerCaptcha", { email })
				.then(res => {
					if(res.data.code === 10000){
						Message.info("发送验证码成功");
						setIsCounting(true);
						setIsSending(false);
						// 开始倒计时
						const interval = setInterval(() => {
							setCountdown((prevCountdown) => {
								if (prevCountdown <= 1) {
									clearInterval(interval);
									setIsCounting(false);
									return 300; // 重置倒计时
								}
								return prevCountdown - 1;
							});
						}, 1000);
					} else if(res.data.code===30010){
						setIsSending(false);
						Message.error("验证码发送过于频繁");
					} else {
						setIsSending(false);
						Message.error("发送验证码失败");
					}
				}).catch(() => {
					setIsSending(false);
					Message.error("发送验证码失败");
				});


		}
	};


	//倒数部分
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
			setCountdown(300); // 重置倒计时
		}
	}, [countdown]);

	//以下为Input部分

	const [panel, setPanel] = useState("1-1");

	//声明注册第一页全部变量
	const [realName, setRealName] = useState("");
	const [sId, setSId] = useState("");
	const [email, setEmail] = useState("");
	const [captcha, setCaptcha] = useState("");
	const [department, setDepartment] = useState("");
	const handleChangeDepartment = (value :string) => {
		setDepartment(value);
	};


	//临时替换的departments
	const departments = [
		{ value: "01", label: "test1" },
		{ value: "02", label: "test2" },
		{ value: "03", label: "test3"}
		// 更多选项...
	];

	//完成第一页填写后翻转到第二页
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


	//声明注册第二页全部变量
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");


	//处理用户注册
	function finalReg() {

		// 正则表达式用于验证姓名，2到4个汉字
		const rNameTest = /^[\u4e00-\u9fa5]{2,4}$/;

		// 正则表达式用于验证学号，7位数字
		const SIdTest = /^[0-9]{7}$/;

		// 正则表达式用于验证邮箱格式
		const emailTest =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		// 正则表达式用于验证验证码，6位数字
		const captchaTest = /^\d{6}$/;

		//逐层检测用户输入
		if(rNameTest.test(realName)){
			if(SIdTest.test(sId)){
				if (emailTest.test(email)){
					if(captchaTest.test(captcha)){
						let msg = {
							"username": username,
							"password": password,
							"realName": realName,
							"email": email,
							"sid": sId,
							"department": department,
							"captcha": captcha
						};
						console.log(msg);

						// 发送注册请求
						axios.post("http://182.92.67.83:10718/auth/register",msg)
							.then(res=>{
								// 根据返回结果进行处理

								if(res.data.code===10000){
									//注册成功，跳转到登录界面
									Message.info("注册成功");
									navigate("/login");
								}else if(res.data.code===30002){
									//错误1：提示用户验证码错误（30002："Captcha Error"）
									Message.error("验证码错误");
								}else if(res.data.code===30007){
									//错误2：提示用户邮箱已被注册（30007："Email Exist"）
									Message.error("邮箱已被注册");
								}else if(res.data.code===30006){
									//错误3：提示用户用户名已存在（30006："Username Exist"）
									Message.error("用户名已被注册");
								}else{
									Message.error("注册失败");
								}
							}).catch(()=>{
								Message.error("注册失败");
							});
					}else {
						Message.error("验证码格式错误");
					}
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


	return (
		<div className={"container1"} style={{ height:"100vh", width:"100vw", backgroundColor:"var(--color-fill-1)"}}>

			<Grid.Row style={{height:"calc(132 / 800 *100vh)", width:"100%",}}>

			</Grid.Row>

			<Grid.Row 
				justify={"center"} 
				align={"center"} 
				style={{height:"calc(536 / 800 *100vh)", width:"100%"}}
			>
				<div 
					className={"frame2"} 
					style={{backgroundColor:"var(--color-white)"}}
				>
					<div style={{height:"80%", width:"90%", display:"flex", justifyContent:"center", alignItems:"center",overflow:"hidden"}}>
						<img alt={"auto"} src={tempImg} style={{height:"100%"}}/>
					</div>
					<div 
						className={"register-panel"} 
						style={{
							position:"absolute",
							justifyContent: "center",
							alignItems: "center",
							display: "inline-flex",
							flexDirection: "column"}}
					>
						<Logo type={{collapsed:false}}/>
						<Button
							className={`btn-${(panel === "1-2" ? "show" : "fade")}`}
							type={"default"}
							shape={"round"}
							size={"large"}
							icon={<IconLeft/>}
							style={{position:"absolute",marginRight:"82.5%"}}
							onClick={() => {setPanel("2-1");}}
						/>
						<div
							style={{width:"80%",height:"90%",overflow:"hidden"}}
						>
							<Grid.Row
								justify="space-around"
								style={{width:"200%",height:"80%"}}
								className={`panel-${panel}`}
								align={"center"}
							>
								<Grid.Col
									span={8}
									style={{
										display:"flex",
										flexDirection:"column",
										alignItems:"center",
										height:"100%",
										justifyContent:"space-between"}}
								>
									<Input 
										style={{width:"45%", minWidth:220}} 
										size={"large"} 
										prefix={<IconUser/>} 
										placeholder={"请输入用户名"} 
										onChange={(value: string, e) => {setUsername(value);}}
									/>

									<Select
										placeholder="请选择部门/书院"
										onChange={handleChangeDepartment}
										style={{marginTop:5,width:"45%", minWidth:220}}
									>
										{departments.map(option => (
											<Option key={option.value} value={option.value}>{option.label}</Option>
										))}
									</Select>

									<Input.Password 
										style={{marginTop:2,width:"45%", minWidth:220}} 
										size={"large"}
										placeholder={"请输入密码"} 
										onChange={(value: string, e) => {setPassword(value);}}
									/>
									<Input.Password 
										visibility={false} 
										style={{marginTop:2,width:"45%", minWidth:220}} 
										size={"large"} 
										placeholder={"请确认你的密码"} 
										onChange={(value: string, e) => {setConfirm(value);}}
									/>
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
								<Grid.Col
									className={"user-information"}
									span={8}
									style={{display:"flex",
										flexDirection:"column",
										alignItems:"center",
										height:"100%",
										justifyContent:"space-between",
										marginLeft:"5%"}}
								>
									<Input
										style={{width:"45%", minWidth:220}}
										size={"large"}
										placeholder={"请输入真实姓名"}
										onChange={(value: string) => {setRealName(value);}}
									/>

									<Input
										style={{marginTop:5,width:"45%", minWidth:220}}
										size={"large"}
										placeholder={"请输入学号"}
										onChange={(value: string, e) => {setSId(value);}}
									/>

									<Input
										value={email}
										style={{marginTop:5,width:"45%", minWidth:220}}
										size={"large"}
										placeholder={"请输入邮箱"}
										onChange={(value: string, e) => {setEmail(value);}}
									/>
									<div style={{marginTop:5,width:"45%", minWidth:220}}>
										<Input value={captcha} style={{width:"100%", minWidth:220}} size={"large"} placeholder={"请输入验证码"} maxLength={6} onChange={(value: string, e) => {setCaptcha(value);}}>
										</Input>
										{isCounting
											//如果验证码发送正在倒计时，则显示倒计时样式，否则显示普通样式
											? <Button 
												loading={isSending} 
												disabled 
												style={{
													width: (isSending ? 110 : 100 ),
													transform: `translate(-${(isSending ? 114 : 104 )}px)`,
													marginTop: 4, 
													position: "absolute"
												}} 
												size={"small"}
												type={"primary"}>
												已发送{countdown}s
											</Button>
											: <Button
												loading={isSending}
												onClick={sendCaptcha}
												style={{
													width: (isSending? 110 : 100 ),
													transform: `translate(-${(isSending ? 114 : 104 )}px)` ,
													marginTop: 4,
													position: "absolute"
												}}
												size={"small"}
												type={"primary"}>
												获取验证码
											</Button>
											//tmd一个傻逼验证码发送按钮费老子这么久，费死劲了
										}

									</div>
									<Button
										type={"primary"}
										size={"large"}
										style={{
											marginTop:10,
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
