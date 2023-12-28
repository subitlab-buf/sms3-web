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
	Link, Typography, Dropdown, Steps
} from "@arco-design/web-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
	IconDown, IconHome, IconPlus, IconQuestionCircle,
	IconRightCircle,
} from "@arco-design/web-react/icon";
import "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import {useNavigate} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuItem = Menu.Item;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SubMenu = Menu.SubMenu;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sider = Layout.Sider;
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
const Step = Steps.Step;

//TODO:获取用户信息user/getInfo
let userInfo = {
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


//TODO:获取用户全部投稿
let drafts = {
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
				"createTime": 1701402846578,
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
				"createTime": 1701402846860,
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
				"createTime": 1701402847157,
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
				"createTime": 1701402847670,
				"auditTime": 1701402847823
			},
			{
				"draftId": "32585e72-935e-46f1-8cfe-8cd8b9e5fe74",
				"title": "test",
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
				"createTime": 1701402847397,
				"auditTime": 1701402847566
			},
			{
				"draftId": "992c3fb6-9ac5-4e20-b5f0-31072a243312",
				"title": "test",
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
				"createTime": 1701402891811,
				"auditTime": 1701402892176
			}
		]
	},
	"timeStamp": 1701404345523
};


let tempLst:any = [];
for(let  i = 0; i < drafts.data.draftInfoList.length; i++){
	if(drafts.data.draftInfoList[i].createTime >=  Math.floor(Date.now() - 37 * 24 * 60 * 60 * 1000)){
		tempLst.push(drafts.data.draftInfoList[i]);
	}
}



function Submission()
{
	const  navigate = useNavigate();
	const [spacerSize, setSpacerSize] = useState((window.innerWidth < 768 ? 12 : 24));
	const [availableHeight, setAvailableHeight] = useState(window.screen.availHeight);
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	useEffect(() => {
		// 创建一个事件处理函数，用于在窗口大小改变时更新 innerWidth
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
		{navigate:"/dashboard/submission", content:"立即投稿", icon:null},
	];

	// @ts-ignore
	return (
		<Layout>
			<Header style={{height:109/800*(availableHeight-74),width:"100%",minHeight:109}}>
				<Row style={{height:"100%",display:"flex",flexDirection:"row",overflow:"hidden"}} justify={"space-between"}>
					<Col flex={`${(innerWidth<768 ? innerWidth - 200 : 300)}px`} style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"start"}}>
						<Breadcrumb style={{paddingLeft:spacerSize,paddingBottom:spacerSize}}>
							{breadCrumbs.map((item:any) => <BreadcrumbItem key={item.content} onClick={() => {navigate(item.navigate);}}>{item.icon}{item.content}</BreadcrumbItem>)}
						</Breadcrumb>
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
						minHeight:Math.max(242,242 / 800*(availableHeight-74)),
						minWidth:(innerWidth >= 768 ? 462 : 0),
						paddingTop: 21,
						paddingBottom: 21,
						paddingLeft: 12,
						paddingRight: 21,
						background: "var(--color-bg-2)",
						boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
						borderRadius: 8,
						overflow: "hidden",
						justifyContent: "flex-start",
						alignItems: "center",
						display: "inline-flex"}}>
						<div style={{width:"100%", height:"100%",paddingLeft:9, paddingRight:9,display:"flex",flexDirection:"column", justifyContent:"space-between",overflow:"hidden"}}>
							<Typography.Paragraph style={{margin:0,height:24}}>
								<Typography.Title  style={{margin: 0}} heading={6}>7天内{tempLst.length > 0 ? "没有投稿" : `有投稿${tempLst.length}个`}</Typography.Title>
							</Typography.Paragraph>
							<div style={{marginTop:30,paddingLeft:17, paddingRight:17,width:"calc( 493/767 * 100%)"}}>
								{tempLst.length > 0  &&
									(innerWidth > 1200  ? tempLst.slice(0,7).map((draft:any) => {
										switch (draft.status){
										case 2:{return(
											<Row style={{marginBottom: 35 }} key={draft.title} align={"end"	}>
												<Col flex={"128px"}>
													<Typography.Text ellipsis={{ wrapper: "span" }} >{draft.title}</Typography.Text>
												</Col>
												<Col flex={"auto"} style={{minWidth:300}}>
													<Steps type='dot' status={"error"} current={3} style={{width:"100%",minWidth:300}}>
														<Step title='上传'/>
														<Step title='审核中' />
														<Step title='已驳回'/>
													</Steps>
												</Col>
											</Row>
										);}
											break;
										case 1:{return(
											<Row style={{marginBottom: 35 }} key={draft.title} align={"end"	}>
												<Col flex={"128px"}>
													<Typography.Text ellipsis={{ wrapper: "span" }}>{draft.title}</Typography.Text>
												</Col>
												<Col flex={"auto"} style={{minWidth:300}}>
													<Steps type='dot' status={"process"} current={3} style={{width:"100%",minWidth:300}}>
														<Step title='上传'/>
														<Step title='审核中' />
														<Step title='已通过'/>
													</Steps>
												</Col>
											</Row>
										);}
											break;
										case 0:{return(
											<Row style={{marginBottom: 35 }} key={draft.title} align={"end"	}>
												<Col flex={"128px"}>
													<Typography.Text ellipsis={{ wrapper: "span" }}>{draft.title}</Typography.Text>
												</Col>
												<Col flex={"auto"} style={{minWidth:300}}>
													<Steps type='dot' status={"process"} current={2} style={{width:"100%",minWidth:300}}>
														<Step title='上传'/>
														<Step title='审核中' />
														<Step title='审核结果'/>
													</Steps>
												</Col>
											</Row>
										);}
											break;
										}}) :
										//宽度不够时
										<Row justify={"space-between"} align={"start"}>
											{tempLst.slice(0,(innerWidth >= 576 ? 3 : 2)).map((draft:any) => {
												switch (draft.status){
												case 2:{return(
													<Col span={7} style={{}} key={draft.title}>
														<div style={{}}>
															<Typography.Text ellipsis={{ wrapper: "span" }} >{draft.title}</Typography.Text>
														</div>
														<Col flex={"auto"} style={{minHeight:248}}>
															<Steps type='dot' status={"error"} current={3} direction={"vertical"} style={{width:"100%",minWidth:250, height:"100%"}}>
																<Step title='上传'/>
																<Step title='审核中' />
																<Step title='已驳回'/>
															</Steps>
														</Col>
													</Col>
												);}
													break;
												case 1:{return(
													<Col span={7} style={{}} key={draft.title}>
														<Col flex={"128px"}>
															<Typography.Text ellipsis={{ wrapper: "span" }}>{draft.title}</Typography.Text>
														</Col>
														<Col flex={"auto"} style={{minHeight:300}}>
															<Steps type='dot' status={"process"} current={3} direction={"vertical"} style={{width:"100%",minWidth:250}}>
																<Step title='上传'/>
																<Step title='审核中' />
																<Step title='已通过'/>
															</Steps>
														</Col>
													</Col>
												);}
													break;
												case 0:{return(
													<Col span={7} style={{}} key={draft.title}>
														<Col flex={"128px"}>
															<Typography.Text ellipsis={{ wrapper: "span" }}>{draft.title}</Typography.Text>
														</Col>
														<Col flex={"auto"} style={{minHeight:300}}>
															<Steps type='dot' status={"process"} current={2} direction={"vertical"} style={{width:"100%",minWidth:250}}>
																<Step title='上传'/>
																<Step title='审核中' />
																<Step title='审核结果'/>
															</Steps>
														</Col>
													</Col>
												);}
													break;
												}})}
										</Row>)}
							</div>
							<div  style={{
								width:"calc( 316/767 * 100%)",
								minWidth:281,
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
							<div style={{height:24}}>
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