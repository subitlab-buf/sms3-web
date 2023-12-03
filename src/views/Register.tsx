import "../Styles/Register.css";
import "../components/Logo";
import {useEffect, useState} from "react";
import {Button, Input, Space, Message, Layout, Carousel, VerificationCode} from "@arco-design/web-react";
import { useNavigate } from "react-router-dom";
import {
	IconUser,
	IconInfoCircle,
	IconSwap,
} from "@arco-design/web-react/icon";
import "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import Logo from "../components/Logo";

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
	const [panelMode, SetPanelMode] = useState(1);

	//未激活验证
	const[realName, setRealName] = useState("");
	const[studentNumber, setStudentNumber] = useState("");
	const[email, setEmail] = useState("");
	const[verificationCode, setVerificationCode] = useState("");
	function handleSetRealName(e:any){
		try {
			let userRealName = e.target.value;
			setRealName(userRealName);
		}catch (error){
			console.log(error);
		}
	}
	//获取并更新真实姓名
	function handleSetStudentNumber(e:any){
		try {
			let userNum = e.target.value;
			setStudentNumber(userNum);
		}catch (error){
			console.log(error);
		}
	}
	//获取并更新学号
	function handleSetEmail(e:any){
		try {
			let userEmail = e.target.value;
			setEmail(userEmail);
		}catch (error){
			console.log(error);
		}
	}
	//获取并更新邮箱
	function handleSetVerificationCode(e:any){
		try {
			let userCode = e.target.value;
			setVerificationCode(userCode);
		}catch (error){
			console.log(error);
		}
	}
	//获取并更新验证码
	
	//激活验证
	const[username, setUsername] = useState("");
	const[password, setPassword] = useState("");
	const[confirm, setConfirm] = useState("");

	function handleSetUserName(e:any){
		let username = e.target.value;
		setUsername(username);
	}
	//获取并更新username

	function handleSetPassword(e:any){
		let userPass = e.target.value;
		setPassword(userPass);
	}
	//获取并更新password

	function handleSetConfirm(e:any){
		let userConf = e.target.value;
		setConfirm(userConf);
	}
	//获取并更新确认的password


	function handleSubmit1(e:any){
		const rNameRegex = /^[\u4e00-\u9fa5]{2,4}$/;
		const sNumRegex = /^[0-9]{7}$/;
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		if ( rNameRegex.test(realName) && sNumRegex.test(studentNumber) && emailRegex.test(email)){
			//先简单检测真名，学号，邮箱格式是否正常
			//TODO:发送给后端检测并发送验证码
			SetPanelMode(2);
		}else {
			Message.error("真实姓名或学号格式错误");
		}
	}

	function handleSubmit2(vcode:string){
		const regex = /^[0-9]{6}$/;
		if(regex.test(vcode)){
			SetPanelMode(3);
		}
		//TODO:发送给后端检测验证码
	}
	//发送验证码

	function handleSubmit3(e:any){
		const nAndPRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,20}$/;
		if (nAndPRegex.test(username) && nAndPRegex.test(password)){
			if (password === confirm){

				//TODO:发送用户名与密码
			}else {
				Message.error("两次输入密码不同");
			}
		}else {
			Message.error("用户名或密码格式错误");
		}
	}


	return (
		<div className={"container1"} style={{height: window.innerHeight }}>

			<div className={"frame2"} style={{overflow:"hidden"}} >
				<div style={{width: 860, height:430, backgroundImage: "url(https://via.placeholder.com/860x430)", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "inline-flex"}}>
					<div style={{alignSelf:" 'stretch'", height: 0, transform: "rotate(-30deg)", transformOrigin: "0 0", border: "1px solid"}} />
				</div>
				<div className={"registerPanel"}>
					<Logo/>

					<Space size={0} direction={"horizontal"} style={{width:500,height:240,marginLeft:"auto",marginRight:"auto"}} className={`panel-${panelMode}`}>
						<div className={"panelInside"}>
							<Space size={18} direction={"vertical"}>
								<Input
									style={{ width: 220, borderRadius: 5 }}
									prefix={<IconUser />}
									suffix={<IconInfoCircle />}
									placeholder="真实姓名"
									maxLength={{ length: 20, errorOnly: true }}
									value={realName}
									onChange={(value: string, e) => handleSetRealName(e)}
									onPressEnter={e => handleSetRealName(e)}
								></Input>
								<Input
									style={{ width: 220, borderRadius: 5 }}
									suffix={<IconInfoCircle />}
									placeholder="请输入学号"
									maxLength={{ length: 20, errorOnly: true }}
									value={studentNumber}
									onChange={(value: string, e) => handleSetStudentNumber(e)}
									onPressEnter={e => handleSetStudentNumber(e)}
								></Input>
								<Input
									style={{ width: 220, borderRadius: 5 }}
									suffix={<IconInfoCircle />}
									placeholder="请输入邮箱"
									maxLength={{ length: 20, errorOnly: true }}
									value={email}
									onChange={(value: string, e) => handleSetEmail(e)}
									onPressEnter={e => handleSetEmail(e)}
								></Input>
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
									onClick={handleSubmit1}
								>
									发送验证码
								</Button>
							</Space>
						</div>

						<div className={"panelInside"}>
							<Space size={18} direction={"vertical"}>
								<VerificationCode
									style={{width: 300}}
									onChange={v => {
										setVerificationCode(v);
									}}
									onFinish={v => {
										//TODO:发送验证码给后端
										setVerificationCode(v);
										handleSubmit2(v);
									}}/>
							</Space>
						</div>

						<div className={"panelInside"}>
							<Space size={18} direction={"vertical"}>
								<Input
									style={{ width: 220, borderRadius: 5 }}
									prefix={<IconUser />}
									suffix={<IconInfoCircle />}
									placeholder="请输入用户名"
									maxLength={{ length: 20, errorOnly: true }}
									value={username}
									onChange={(value: string, e) => handleSetUserName(e)}
									onPressEnter={e => handleSetUserName(e)}
								></Input>
								<Input.Password
									style={{ width: 220, borderRadius: 5 }}
									placeholder="请设置密码"
									maxLength={{ length: 20, errorOnly: true }}
									value={password}
									onChange={(value: string, e) => handleSetPassword(e)}
									onPressEnter={e => handleSetPassword(e)}
								/>
								<Input.Password
									style={{ width: 220, borderRadius: 5 }}
									placeholder="请确认密码"
									visibility={false}
									visibilityToggle={false}
									maxLength={{ length: 20, errorOnly: true }}
									value={confirm}
									onChange={(value: string, e) => handleSetConfirm(e)}
									onPressEnter={e => handleSetConfirm(e)}
								/>
								<Button
									type={"primary"}
									size={"large"}
									style={{
										marginTop:0,
										paddingTop: 5,
										paddingBottom: 5,
										paddingLeft: 16,
										paddingRight: 16,
										fontSize: 14,
										width: 220,
										borderRadius: 5,
									}}
									onClick={handleSubmit3}
								>
									注册
								</Button>
							</Space>
						</div>

					</Space>


				</div>
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
