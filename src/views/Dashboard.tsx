import "../styles/Dashboard.css";
import SubIt from "../assets/subit.svg";
import "../components/Logo";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Space, Layout, Grid} from "@arco-design/web-react";
import {Menu} from "@arco-design/web-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Logo from "../components/Logo";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PKUS from "../assets/pkus.svg";
import "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React,{useState} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MenuContext from "@arco-design/web-react/es/Menu/context";
import {IconDashboard, IconHistory, IconUpload, IconUser} from "@arco-design/web-react/icon";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuItem = Menu.Item;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sider = Layout.Sider;
const Content = Layout.Content;
const collapsedWidth = 50;
const normalWidth = 220;


function Dashboard()
{
	const [collapsed, setCollapsed] = useState(false);
	const [logoCollapsed, setLogoCollapsed] = useState(false);
	const [siderWidth, setSiderWidth] = useState(normalWidth);

	const onCollapse = (collapsed:any) => {
		setCollapsed(collapsed);
		setSiderWidth(collapsed ? collapsedWidth : normalWidth);
	};

	// @ts-ignore
	const handleMoving = (_:any, { width }) => {
		if (width > collapsedWidth) {
			setSiderWidth(width);
			setCollapsed(!(width > collapsedWidth + 20));
		} else {
			setSiderWidth(collapsedWidth);
			setCollapsed(true);
		}
		if (width > 150){
			setLogoCollapsed(false);
		}else {
			setLogoCollapsed(true);
		}
	};


	const location = useLocation();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const  navigate = useNavigate();
	// 获取路径的数组
	const pathSegments = location.pathname.split("/").filter(Boolean);
	// 获取层次最低的路径
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const lowestPath = pathSegments[pathSegments.length - 1] || "root";

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const myMenuItms = [
		{
			key:"1",
			name:"工作台",
			url:"main",
			icon:<IconDashboard/>,
			chosenIcon:<IconDashboard style={{color:"white"}}/>
		},{
			key:"2",
			name:"立即投稿",
			url:"submission",
			icon:<IconUpload/>,
			chosenIcon:<IconUpload style={{color:"white"}}/>
		},{
			key:"3",
			name:"历史投稿",
			url:"history",
			icon: <IconHistory/>,
			chosenIcon:<IconHistory style={{color:"white"}}/>
		},{
			key:"4",
			name:"用户信息",
			url:"userinfo",
			icon:<IconUser/>,
			chosenIcon:<IconUser style={{color:"white"}}/>
		}];

	return (
		<Layout className='container2' style={{height:"100vh"}}>
			<Sider trigger={null} collapsible onCollapse={onCollapse} collapsed={collapsed} width={siderWidth} resizeBoxProps={{directions: ["right"], onMoving: handleMoving,}} style={{minWidth:collapsedWidth,overflow:"hidden"}}>
				<div style={{height:"50%"}}>

					<Grid.Col>
						<div style={{
							width:"100%",
							paddingTop:28,
							paddingBottom:24,
							overflow:"hidden",
							display:"inline-flex",
							flexDirection:"column",
							alignItems:"center",
							justifyContent:"center",}}>
							<div onClick={() => {window.open("https://subit.org.cn/");}} style={{backgroundColor: "rgba(0,0,0,0%)"}}>{logoCollapsed ? <div style={{padding:5,height:59,justifyContent: "center", alignItems: "center", display: "inline-flex", flexDirection:"column"}}><img src={SubIt} style={{width:"100%", maxWidth:60}}/></div> : <Logo/>}</div>
						</div>
						<Menu mode={"vertical"}  defaultSelectedKeys={["1"]} style={{height:"auto", width:"100%"}}>
							{myMenuItms.map(item =>
								<MenuItem key={item.key} className={"menuBtn"} style={(item.url === lowestPath || (lowestPath === "dashboard" && item.url === "main")) ? {backgroundColor:"#165DFF", color:"white", borderRadius:5}:{borderRadius:5}} onClick={() => {navigate("/dashboard/"+item.url);console.log("/dashboard/"+item.url);}}>{(item.url === lowestPath || (lowestPath === "dashboard" && item.url === "main")) ? item.chosenIcon: item.icon}{item.name}
								</MenuItem>)}
						</Menu>
					</Grid.Col>
				</div>
				<Grid.Row style={{height:"50%"}} justify={"center"} align={"end"}>
					<Grid.Col flex={"auto"}>
						<img src={PKUS} style={{width:25, height:25, marginLeft:13,marginBottom:13}} onClick={() => {window.open("https://www.pkuschool.edu.cn/");}} alt={"25"}/>
					</Grid.Col>
				</Grid.Row>
			</Sider>
			<Content id="detail">
				<Outlet/>
			</Content>
		</Layout>
	);
}
export default Dashboard;