import "../../styles/Dashboard.css";
import "../../components/Logo";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {useEffect, useState} from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
	Button,
	Space,
	Menu,
	Layout,
	Breadcrumb,
	Grid,
	Link,
	Steps, Typography, Statistic
} from "@arco-design/web-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
	IconHistory,
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

const links = [
	{name: "大屏使用指南", href:"https://www.bilibili.com/video/BV1yL411K7CP/"},
	{name: "SubIT大屏使用协议", href:"https://www.bilibili.com/video/BV1yL411K7CP/"},
	{name: "北大附中门户", href:"https://www.bilibili.com/video/BV1yL411K7CP/"},
	{name: "SubIT 社团官网", href:"https://www.bilibili.com/video/BV1yL411K7CP/"},
	{name: "北大附中o365", href:"https://www.bilibili.com/video/BV1yL411K7CP/"},];


//TODO:获取用户投稿
const drafts = {
	"code": 10000,
	"message": "success",
	"data": {
		"length": 50,
		"draftInfoList": [
			{
				"draftId": "0cadba4c-2cd3-4e81-9474-f9547cb0c248",
				"title": "格物书院银杏节宣传111",
				"content": null,
				"description": "test",
				"startDate": 1701402856000,
				"endDate": 1701403846000,
				"permittedBegin": 1701402856000,
				"permittedEnd": 1701403846000,
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

function MainPage()
{
	
	const  navigate = useNavigate();

	return (
		<Layout>
			<Header style={{height:0.13625*(window.screen.availHeight-74),width:"100%"}}>
				<div style={{height: 50, width: 276, paddingTop:43, paddingLeft:24, flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: 4, display: "inline-flex"}}>
					<div style={{opacity: 0.90, color: "#1D2129", fontSize: 16, fontFamily: "PingFang SC", fontWeight: "500", wordWrap: "break-word"}}>工作台</div>
					<div style={{color: "#4E5969", fontSize: 14, fontFamily: "PingFang SC", fontWeight: "500", wordWrap: "break-word"}}>下午好，张子健。欢迎使用SubIT大屏系统。</div>
				</div>
			</Header>
			<Content style={{width:"100%"}}>
				<Row justify={"start"} align={"start"}>
					<Col span={14} style={{paddingLeft:24}}>
						<Row>
							<Col span={24}>
								<div  style={{
									width:"calc(50% - 24px)",
									float:"left",
									overflow:"hidden",
									height:0.1575*(window.screen.availHeight-74),
									padding: 5,
									background: "white",
									boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
									borderRadius: 8,
									flexDirection: "column",
									justifyContent: "flex-start",
									alignItems: "flex-start",
									gap: 10,
									display: "inline-flex"}}>
									<div style={{width:"18.3vw",padding:"7%"}}>
										<div style={{
											color: "#4E5969",
											fontSize: 14,
											fontFamily: "Nunito Sans",
											fontWeight: "400",
											wordWrap: "break-word"
										}}>新增一条投稿</div>
										<Button type={"primary"} size={"large"} style={{marginTop:8,width:116}} onClick={() => {navigate("/dashboard/submission");}}>立即投稿</Button>
										<div style={{marginTop: 10}}>
											<Typography.Text type={"secondary"}>投稿即遵循《SubIT大屏使用协议》</Typography.Text>
										</div>
									</div>
								</div>
								<div style={{
									width:"calc(50% - 24px)",
									float:"right",
									height:0.1575*(window.screen.availHeight-74),
									padding: 5,
									background: "white",
									boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
									borderRadius: 8,
									flexDirection: "column",
									justifyContent: "flex-start",
									alignItems: "flex-start",
									gap: 10,
									display: "inline-flex"}}>
									<div style={{width:"18.3vw",padding:"7%"}}>
										<Statistic title={"历史投稿（已结束）"} prefix={<IconHistory/>} suffix={<Typography.Text type={"secondary"}>已结束播放</Typography.Text>}></Statistic>
										<div style={{marginTop: 10}}>
											<Link href={"/dashboard/history"}>去历史投稿<IconRightCircle/></Link>
										</div>
									</div>
								</div>
							</Col>
							<Col style={{height:0.36875*(window.screen.availHeight-74),
								marginTop:17,
								paddingTop: 21,
								paddingBottom: 18,
								paddingLeft: 12,
								paddingRight: 21,
								background: "white",
								boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
								borderRadius: 8,
								overflow: "hidden",
								justifyContent: "flex-start",
								alignItems: "center",
								display: "inline-flex"}}>
								<div style={{width:"100%", height:"100%", paddingLeft:9, paddingRight:9, overflow:"hidden"}}>
									<div style={{width: 128, height: 24, justifyContent: "flex-start", alignItems: "center", gap: 4, display: "inline-flex"}}>
										<div style={{color: "#1D2129", fontSize: 16, fontFamily: "PingFang SC", fontWeight: "500",wordWrap: "break-word"}}>当前投稿审核进度</div>
									</div>
									<div style={{marginTop:20,paddingLeft:17,paddingRight:17}}>
										{drafts.data.draftInfoList.map(draft => {
											switch (draft.status){
											case 2:{return(
												<Row style={{marginBottom: 35 }} key={draft.title} align={"end"	}>
													<Col xs={8} sm={8} xl={6} xxl={5} xxxl={3}>
														<Typography.Text ellipsis={{ wrapper: "span" }}>{draft.title}</Typography.Text>
													</Col>
													<Col xs={14} sm={16} xl={18} xxl={19} xxxl={21}>
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
												<Row style={{marginBottom: 35 }} key={draft.title}>
													<Col span={4}>
														{draft.title}
													</Col>
													<Col span={20}>
														<Steps type='dot' status={"process"} current={3} style={{width:"100%"}}>
															<Step title='上传'/>
															<Step title='审核中' />
															<Step title='已通过'/>
														</Steps>
													</Col>
												</Row>
											);}
												break;
											case 0:{return(
												<Row style={{marginBottom: 35 }} key={draft.title}>
													<Col span={4}>
														{draft.title}
													</Col>
													<Col span={20}>
														<Steps type='dot' status={"process"} current={2} style={{width:"100%"}}>
															<Step title='上传'/>
															<Step title='审核中' />
															<Step title='审核结果'/>
														</Steps>
													</Col>
												</Row>
											);}
												break;
											}
										})}
									</div>
								</div>
							</Col>
							<Col style={{height:0.26*(window.screen.availHeight-74),
								marginTop:17,
								paddingTop: 17,
								paddingBottom: 66,
								paddingLeft: 22,
								paddingRight: 13,
								background: "white",
								boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
								borderRadius: 8,
								overflow: "hidden",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								gap: 17,
								display: "inline-flex"}}>
								a
							</Col>
						</Row>
					</Col>
					<Col span={7} style={{paddingLeft:24}}>
						<Col style={{
							height:0.35125*(window.screen.availHeight-74),
							paddingTop: 21,
							paddingBottom: 25,
							paddingLeft: 12,
							paddingRight: 14,
							background: "white",
							boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
							borderRadius: 8,
							overflow: "hidden",
							flexDirection: "column",
							justifyContent: "flex-start",
							alignItems: "flex-start",
							gap: 17,
							display: "inline-flex"}}>
							awa
						</Col>
						<Col style={{
							height:0.35125*(window.screen.availHeight-74),
							marginTop:17,
							paddingTop: 21,
							paddingBottom: 23,
							paddingLeft: 12,
							paddingRight: 14,
							background: "white",
							boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
							borderRadius: 8,
							overflow: "hidden",
							flexDirection: "column",
							justifyContent: "flex-start",
							alignItems: "flex-start",
							gap: 17,
							display: "inline-flex"
						}}>
							<Space  direction={"vertical"}>
								<div style={{width: "100%", marginTop:"auto", height: "100%", justifyContent: "flex-start", alignItems: "center", gap: 4, display: "inline-flex"}}>
									<div style={{color: "#1D2129", fontSize: 16, fontFamily: "PingFang SC", fontWeight: "500", wordWrap: "break-word"}}>常用链接</div>
								</div>
								{links.map(thisLink => <Link key={thisLink.name} href={thisLink.href} style={{marginTop:"auto",color: "#165DFF", fontSize: 14, fontFamily: "PingFang SC", fontWeight: "400", wordWrap: "break-word"}} icon>{thisLink.name}</Link>)}
							</Space >
						</Col>
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
export default MainPage;