import "../Styles/Dashboard.css";
import "../components/Logo";
import {useEffect, useState} from "react";
import { Button, Carousel, Input, Space, Message, Menu, Layout, Breadcrumb} from "@arco-design/web-react";
import {
	IconUser,
	IconInfoCircle,
	IconSwap,
	IconDashboard,
	IconShareExternal,
	IconHistory,
} from "@arco-design/web-react/icon";
import "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import Logo from "../components/Logo";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

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


	return (
		<div className='container2'	>
			<Menu mode={"vertical"}  defaultSelectedKeys={["1"]} className={"menu"}>
				<Space direction={"vertical"} size={24}>
					<MenuItem key={"0"} style={{width:"100%",
						display:"inline-flex",
						flexDirection:"column",
						alignItems:"center",
						justifyContent:"center",
						overflow:"hidden",
						backgroundColor: "rgba(0,0,0,0%)"
					}}><Logo/></MenuItem>
					<Space size={0} direction={"vertical"}>
						<MenuItem key='1' className={"menuBtn"}><IconDashboard fontSize={12}/>工作台</MenuItem>
						<MenuItem key='2' className={"menuBtn"}><IconShareExternal fontSize={12}/>立即投稿</MenuItem>
						<MenuItem key='3' className={"menuBtn"}><IconHistory fontSize={12}/>历史投稿</MenuItem>
						<MenuItem key='4' className={"menuBtn"}><IconUser fontSize={12}/>用户信息</MenuItem>
					</Space>
				</Space>
			</Menu>
		</div>
	);

}

export default Login;