import "../styles/Login.css";
import {useEffect, useState} from "react";
import { Message} from "@arco-design/web-react";
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
	//scale控制模块
	const [frameScale, setFrameScale] = useState(window.innerWidth < 300 ? 0.25 : ((window.screen.availWidth - 16) / 1200));
	const changeScale = () => {
		if(window.innerWidth < 300){
			setFrameScale(0.25);
		}else{
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
	function handleSubmit(e:any){
		if (username.length <= 20 && password.length <= 20 && username.length >0 && password.length>0){
			//发送用户名与密码
			console.log(`
			username:${username}
			password:${password}`);

		}else {
			console.log("username or password is illegal");
			Message.error("用户名或密码长度过长");
		}
	}


	return (
		<div className={"container1"} style={{height: 800*frameScale, gap: 97*frameScale }}>

			<div className={"frame1"} style={{transform: `scale(${frameScale})`,}} >

			</div>
		</div>
	);

}

export default Login;
