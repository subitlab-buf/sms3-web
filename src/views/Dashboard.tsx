import "../styles/Dashboard.css";
import BgMode from "../components/BgMode";
import "../components/Logo";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Space, Layout, Grid, Button, Icon} from "@arco-design/web-react";
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
import React, {useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MenuContext from "@arco-design/web-react/es/Menu/context";
import {IconHome, IconHistory, IconUpload, IconUser, IconLeft} from "@arco-design/web-react/icon";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuItem = Menu.Item;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sider = Layout.Sider;
const Content = Layout.Content;
const collapsedWidth = 50;
const normalWidth = 220;
const maxWidth = 400;


function Dashboard()
{

	const TriggerContent = function ({ className }:any) {
		return (
			<div className={`resizebox-demo-custom-trigger ${className}`}>
				<div className='resizebox-demo-custom-trigger-line' />
			</div>
		);
	};

	const [collapsed, setCollapsed] = useState((window.innerWidth<=768 ? true : false));
	const [prevWidth, setPrevWidth] = useState(normalWidth);
	const [logoCollapsed, setLogoCollapsed] = useState((window.innerWidth<=768 ? true : false));
	const [siderWidth, setSiderWidth] = useState(normalWidth);
	const [siderWidthT, setSiderWidthT] = useState(normalWidth);
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	// 创建一个事件处理函数，用于在窗口大小改变时更新 innerWidth
	const handleResize = () => {
		setInnerWidth(window.innerWidth);
		if(window.innerWidth<=768){
			setSiderWidth(collapsedWidth);
			setCollapsed(true);
			setLogoCollapsed(true);
		}
	};

	const onCollapse = (collapsed:any) => {
		setCollapsed(collapsed);
		setSiderWidth(collapsed ? collapsedWidth : normalWidth);
	};


	const handleCollapse =  () =>{
		if (collapsed){
			setSiderWidth(prevWidth);
			setCollapsed(false);
			setLogoCollapsed(false);
		}else {
			setCollapsed(true);
			setLogoCollapsed(true);
			setSiderWidth(collapsedWidth);
			setPrevWidth((siderWidthT <= normalWidth ? normalWidth : siderWidthT));
		}
	} ;


	// @ts-ignore
	const handleMoving = (_:any, { width }) => {
		if (width > collapsedWidth) {
			setSiderWidth(width);
			setSiderWidthT(width);
			setCollapsed(!(width > collapsedWidth + 20));
		} else {
			setSiderWidth(collapsedWidth);
			setSiderWidthT(collapsedWidth);
			setCollapsed(true);
		}
		if (width > 180){
			setLogoCollapsed(false);
		}else {
			setLogoCollapsed(true);
		}
		setSiderWidth(maxWidth);
	};


	useEffect(() => {

		// 在组件挂载时添加窗口大小改变事件监听器
		window.addEventListener("resize", handleResize);

		// 清除事件监听器，防止内存泄漏
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);



	const location = useLocation();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const  navigate = useNavigate();
	// 获取路径的数组
	const pathSegments = location.pathname.split("/").filter(Boolean);
	// 获取层次最低的路径
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const lowestPath = (pathSegments.length === 1 ?pathSegments[0] :pathSegments[1]) || "root";

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const myMenuItms = [
		{
			key:"1",
			name:"工作台",
			url:"main",
			icon:<IconHome/>,
			chosenIcon:<IconHome style={{color:"white"}}/>
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

	let selectedKey = "";
	myMenuItms.map(item => {
		if (item.url === lowestPath || (lowestPath === "dashboard" && item.url === "main")){
			selectedKey=(item.key);
		}});

	return (
		<Layout className='container2' style={{height:"100vh",backgroundColor:"var(--color-neutral-2)"}}>
			<Sider trigger={null} collapsible onCollapse={onCollapse} collapsed={collapsed} width={siderWidth} resizeBoxProps={{directions: ["right"], onMoving: handleMoving, resizeTriggers: {right: <TriggerContent className='resizebox-demo-custom-trigger-vertical' />}}} style={{minWidth:collapsedWidth,overflow:"hidden",maxWidth:maxWidth}}>
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
							<div onClick={() => {window.open("https://subit.org.cn/");}} style={{backgroundColor: "rgba(0,0,0,0%)"}}><Logo type={{collapsed:logoCollapsed}}/></div>
						</div>
						<Menu mode={"vertical"}  defaultSelectedKeys={["1"]} style={{height:"auto", width:"100%"}} selectedKeys={[selectedKey]}>
							{myMenuItms.map(item =>
								<MenuItem key={item.key} className={"menuBtn"} style={(item.key === selectedKey.toString()  ? {backgroundColor:"rgb(var(--primary-6))", color:"white", borderRadius:5}:{borderRadius:5})} onClick={() => {navigate("/dashboard/"+item.url);console.log("/dashboard/"+item.url);}}>{(item.key === selectedKey.toString()  ? item.chosenIcon: item.icon)}{item.name}
								</MenuItem>)}
						</Menu>
					</Grid.Col>
				</div>
				<Grid.Row style={{height:"50%"}} justify={"center"} align={"end"}>
					<Grid.Col flex={"auto"}>
						<Grid.Row style={{height:"auto", marginLeft:13,marginBottom:3}}>
							<img src={PKUS} style={{width:25, height:25,marginRight:10,marginBottom:10}} onClick={() => {window.open("https://www.pkuschool.edu.cn/");}} alt={"25"}/>
							<div style={{height:25,marginBottom:10}}><BgMode/></div>
						</Grid.Row>
					</Grid.Col>
				</Grid.Row>
			</Sider>
			<Content id="detail" style={{minWidth:350, background:"var(--color-neutral-2)",paddingRight:(innerWidth < 576 ? 12 : 0)}}>
				<Button shape={"round"} size={"large"} style={{position:"absolute",marginTop:"35vh", width:20,zIndex:999, backgroundColor:"var(--color-bg-2)", transform:"translate(-10px,0px)",border:" 2px var(--color-text-4) solid"}} icon={<IconLeft style={{transform:`rotate(${collapsed ? 180 : 0}deg)`}}/>}
					onClick={handleCollapse}></Button>
				<Outlet/>
			</Content>
		</Layout>
	);
}
export default Dashboard;