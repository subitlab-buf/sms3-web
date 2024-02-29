import "../../styles/Dashboard.css";
import "../../components/Logo";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
	Button,
	Menu,
	Layout,
	Breadcrumb,
	Grid,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	Link, Typography, Dropdown, Steps, Message, Radio
} from "@arco-design/web-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
	IconDown, IconHome, IconPlus, IconQuestionCircle,
	IconRightCircle,
} from "@arco-design/web-react/icon";
import "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuItem = Menu.Item;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = Layout.Header;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Footer = Layout.Footer;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Content = Layout.Content;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BreadcrumbItem = Breadcrumb.Item;
const Row = Grid.Row;
const Col = Grid.Col;

let userInfo: any = undefined;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let drafts: any = undefined;

const getUserInfo = async () => {
	try {
		const token = localStorage.getItem("token");
		const res = await axios.get("http://182.92.67.83:10718/user/getInfo", {
			headers: {
				"Authorization": "Bearer" + token,
				"Content-Type": "application/json"
			}
		});

		if (res.data.code === 10000) {
			console.log(res.data);
			userInfo = res;
		} else {
			throw new Error("获取用户信息失败");
		}

	} catch (error) {
		console.log(error);
		throw error;
	}
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const refreshUserDrafts = async () => {
	try {
		const token = localStorage.getItem("token");
		const res = await axios.get("http://182.92.67.83:10718/draft/getUserDraftByStatus", {
			headers: {
				"Authorization": "Bearer" + token,
				"Content-Type": "application/json"
			},
			params: {
				page:1,
				length:3,
				status:1,
			}
		});

		if (res.data.code === 10000) {
			console.log(res.data);
			drafts = res;
		} else if (res.data.code === 50003) {
			throw new Error("获取用户投稿列表失败");
		}

	} catch (error) {
		console.log(error);
		throw error;
	}

	drafts = {
		"code": 10000,
		"message": "success",
		"data": {
			"length": 50,
			"draftInfoList": [
				{
					"draftId": "0cadba4c-2cd3-4e81-9474-f9547cb0c248",
					"title": "test1",
					"content": null,
					"description": "test",
					"startDate": 1701402856000,
					"endDate": 1701403846000,
					"permittedBegin": 1701402856000,
					"permittedEnd": 1703048240000,
					"status": 2,
					"suggestion": "111",
					"screenId": "default",
					"filesName": [],
					"sourceId": 1,
					"createTime": new Date().getTime(),
					"auditTime": 1701402846751
				},
				{
					"draftId": "c6f712e6-f93d-4a20-ad4a-ff9cc321ac1c",
					"title": "test2",
					"content": null,
					"description": "test",
					"startDate": 1701402856000,
					"endDate": 1701403846000,
					"permittedBegin": 1701402856000,
					"permittedEnd": 1701403846000,
					"status": 1,
					"suggestion": "111",
					"screenId": "default",
					"filesName": [],
					"sourceId": 1,
					"createTime": new Date().getTime(),
					"auditTime": 1701402847057
				},
				{
					"draftId": "044ed04e-8fcd-435b-9664-702ac98df90c",
					"title": "test3",
					"content": null,
					"description": "test",
					"startDate": 1701402857000,
					"endDate": 1701403847000,
					"permittedBegin": 1701402857000,
					"permittedEnd": 1701403847000,
					"status": 0,
					"suggestion": "111",
					"screenId": "default",
					"filesName": [],
					"sourceId": 1,
					"createTime": new Date().getTime(),
					"auditTime": 1701402847317
				},
				{
					"draftId": "2378b1d5-88e9-49e2-b6eb-bb055671ad77",
					"title": "test4",
					"content": null,
					"description": "test",
					"startDate": 1701402857000,
					"endDate": 1701403847000,
					"permittedBegin": 1701402857000,
					"permittedEnd": 1701403847000,
					"status": -1,
					"suggestion": "111",
					"screenId": "default",
					"filesName": [],
					"sourceId": 1,
					"createTime": new Date().getTime(),
					"auditTime": 1701402847823
				},
				{
					"draftId": "32585e72-935e-46f1-8cfe-8cd8b9e5fe74",
					"title": "test5",
					"content": null,
					"description": "test",
					"startDate": 1701402857000,
					"endDate": 1701403847000,
					"permittedBegin": 1701402857000,
					"permittedEnd": 1701403847000,
					"status": 1,
					"suggestion": "111",
					"screenId": "default",
					"filesName": [],
					"sourceId": 1,
					"createTime": new Date().getTime(),
					"auditTime": 1701402847566
				},
				{
					"draftId": "992c3fb6-9ac5-4e20-b5f0-31072a243312",
					"title": "test6",
					"content": null,
					"description": "test",
					"startDate": 1701402901000,
					"endDate": 1701403891000,
					"permittedBegin": 1701402901000,
					"permittedEnd": 1701403891000,
					"status": 1,
					"suggestion": "111",
					"screenId": "default",
					"filesName": [],
					"sourceId": 1,
					"createTime": new Date().getTime(),
					"auditTime": 1701402892176
				}
			]
		},
		"timeStamp": 1701404345523
	};

};

const handleErrors = async () => {
	try {
		await getUserInfo();
		await refreshUserDrafts();

		// 处理所有请求成功的情况

	} catch (error) {
		// 处理所有请求失败的情况
		console.log(error);
		//Message.error("获取用户信息失败");
	}
};

// 调用函数
handleErrors();

userInfo = {
	"code": 10000,
	"message": "success",
	"data": {
		"id": 1,
		"username": "subittest",
		"email": "subit@i.pkuschool.edu.cn",
		"sid": "1000000",
		"realName": "小北",
		"departmentName": "test"
	},
	"timeStamp": 12345
};

function Submission()
{
	const  navigate = useNavigate();
	const [spacerSize, setSpacerSize] = useState((window.innerWidth < 768 ? 12 : 24));
	const [availableHeight, setAvailableHeight] = useState(window.screen.availHeight);
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);


	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [filter, setFilter] = useState("1");


	useEffect(() => {
		const handleResize = () => {
			setAvailableHeight(window.screen.availHeight);
			setInnerWidth(window.innerWidth);
			setSpacerSize((window.innerWidth < 768 ? 12 : 24));
		};

		// 在组件挂载时添加窗口大小改变事件监听器
		window.addEventListener("resize", handleResize);

		// 清除事件监听器，防止内存泄漏
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);


	const dropList = <Menu>
		<MenuItem key={"1"}>个人中心</MenuItem>
		<MenuItem key={"2"}>修改密码</MenuItem>
		<MenuItem key={"3"}>退出登录</MenuItem>
	</Menu>;

	const breadCrumbs = [
		{navigate:"/dashboard/main", content:"主页", icon:<IconHome/>},
		{navigate:"/dashboard/history", content:"立即投稿", icon:null},
	];

	// @ts-ignore
	return (
		<Layout>
			<Header style={{height:109/800*(availableHeight-74),width:"100%",minHeight:109}}>
				<Row style={{height:"100%",display:"flex",flexDirection:"row",overflow:"hidden"}} justify={"space-between"}>
					<Col flex={`${(innerWidth<768 ? innerWidth - 200 : 300)}px`} style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"start"}}>
						<Breadcrumb style={{paddingLeft:spacerSize}}>
							{breadCrumbs.map((item:any) => <BreadcrumbItem key={item.content} onClick={() => {navigate(item.navigate);}}>{item.icon}{item.content}</BreadcrumbItem>)}
						</Breadcrumb>
						<Radio.Group defaultValue={"1"} type={"button"} size={"large"} onChange={(value: any) => setFilter(value)}
							style={{paddingLeft:spacerSize,paddingTop:spacerSize/2,paddingBottom:5}}>
							<Radio value='0'>审核中</Radio>
							<Radio value='1'>已通过</Radio>
							<Radio value='2'>已驳回</Radio>
						</Radio.Group>
					</Col>
					<Col flex={"120px"} style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"start"}}>
						<div style={{height:32,display:"flex",flexDirection:"row",alignItems:"center",width:"100%"}}>
							<IconQuestionCircle fontSize={24}/>
							<Dropdown position={"br"} droplist={dropList} trigger={"hover"}>
								<Button style={{width:74}} size={"large"}>{userInfo.data.realName}<IconDown/></Button>
							</Dropdown>
						</div>
					</Col>
				</Row>
			</Header>
			<Content style={{width:"100%"}}>
				<Row justify={"start"} align={"start"} style={{paddingRight:spacerSize,paddingLeft:spacerSize}}>
					<Col xs={24} md={18} style={{
						minWidth:(innerWidth >= 768 ? 462 : 0),
						paddingTop: 21,
						paddingBottom: 21,
						paddingLeft: 12,
						paddingRight: 21,
						border: "red 1px solid",
						overflow: "hidden",
						justifyContent: "flex-start",
						alignItems: "center",
						display: "inline-flex"}}>
						<div style={{width:"100%", height:"100%",paddingLeft:9, paddingRight:9,display:"flex",flexDirection:"column", justifyContent:"space-between",overflow:"hidden"}}>

							<div style={{marginTop:30,paddingLeft:17, paddingRight:17,width:"calc( 493/767 * 100%)"}}>

							</div>
							<div  style={{
								width:"calc( 316/767 * 100%)",
								minWidth:261,
								float:"left",
								overflow:"hidden",
								border:"1px var(--color-border-2) solid",
								padding: 5,
								background: "var(--color-bg-2)",
								boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
								borderRadius: 8,
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								display: "inline-flex",
								height:Math.max(126, 126/ 800*(availableHeight-74))
							}}>
								<div style={{width:"100%",padding:16,display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"}}>
									<Typography.Paragraph style={{margin:0}}>
										<Typography.Title  style={{margin: 0}} heading={6}>新增一条投稿</Typography.Title>
									</Typography.Paragraph>
									<Button type={"primary"} size={"large"} style={{width:116, height:36}} onClick={() => {navigate("/dashboard/submission/create");}}><IconPlus/>立即投稿</Button>
									<Typography.Text type={"secondary"}>投稿即遵循《SubIT大屏使用协议》</Typography.Text>
								</div>
							</div>
							<div style={{height:24,marginTop:10}}>
								<Link onClick={() => {navigate("/dashboard/history");}}>查看历史<IconRightCircle/></Link>
							</div>
						</div>
					</Col>
				</Row>
			</Content>
			<Footer>
				<div>
					<br/>
				</div>
			</Footer>
		</Layout>
	);
}
export default Submission;