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
	Link, Typography, Statistic
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

let historyDrafts = 0;
drafts.data.draftInfoList.map(draft => { // @ts-ignore
	if(draft.status === 1 && draft.permittedEnd < Date.parse(new Date())){
		historyDrafts += 1;
	}} );

//TODO:获取全部大屏ID(/screen/getAll)
let screens = {
	"code": 0,
	"message": "string",
	"data": [
		{
			"screenId": "大屏1",
			"code": "string",
			"description": "string",
			"bindId": 0
		},{
			"screenId": "大屏2",
			"code": "string",
			"description": "string",
			"bindId": 0
		},{
			"screenId": "大屏3",
			"code": "string",
			"description": "string",
			"bindId": 0
		}
	],
	"timeStamp": 0
};
//将screens处理为RadioGroup可传入值
let screenOptions:any = [];
let screenContents:any = [];
for(let i =0; i<screens.data.length; i++){
	screenOptions.push({value:i,label:screens.data[i].screenId});
	screenContents.push(getScreenCurrent(screens.data[i].screenId));
}

console.log(screenContents);

function getScreenCurrent(sceenID:any){


	console.log(sceenID);
	//TODO:获取指定大屏投稿内容
	let exhibiting = {
		"code": 0,
		"message": "string",
		"data": {
			"length": 0,
			"draftInfoList": [
				{
					"draftId": "string",
					"title": "string",
					"content": "string",
					"description": "string",
					"startDate": 0,
					"endDate": 0,
					"permittedStart": 0,
					"permittedEnd": 0,
					"status": 0,
					"suggestion": "string",
					"createTime": 0,
					"auditTime": 0
				},{
					"draftId": "string",
					"title": "string",
					"content": "string",
					"description": "string",
					"startDate": 0,
					"endDate": 0,
					"permittedStart": 0,
					"permittedEnd": 0,
					"status": 0,
					"suggestion": "string",
					"createTime": 0,
					"auditTime": 0
				}
			]
		},
		"timeStamp": 0
	};
	if(sceenID !== "大屏1"){
		return exhibiting.data.draftInfoList;
	}else {
		return [

		];
	}
}

//获取通知


function Submission()
{
	const  navigate = useNavigate();


	// @ts-ignore
	return (
		<Layout>
			<Header style={{height:97 / 800*(window.screen.availHeight-74),width:"100%"}}>
				<Row style={{height:"100%",display:"flex",flexDirection:"column", alignItems:"start"}}>
					<Col style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"start"}}>
						<div style={{marginBottom:16, paddingLeft:24, flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: 4, display: "inline-flex"}}>
							<Typography.Title heading={6}>工作台</Typography.Title>
							<Typography.Text type={"secondary"}>下午好，{userInfo.data.realName}。欢迎使用SubIT大屏系统。</Typography.Text>
						</div>
					</Col>
				</Row>
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
									background: "var(--color-bg-2)",
									boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
									borderRadius: 8,
									flexDirection: "column",
									justifyContent: "flex-start",
									alignItems: "flex-start",
									gap: 10,
									display: "inline-flex"}}>
									<div style={{width:"18.3vw",padding:"5%",display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"}}>
										<Typography.Paragraph style={{margin:0}}>
											<Typography.Title  style={{margin: 0}} heading={6}>新增一条投稿</Typography.Title>
										</Typography.Paragraph>
										<Button type={"primary"} size={"large"} style={{marginTop:8,width:116}} onClick={() => {navigate("/dashboard/submission");}}>立即投稿</Button>
										<Typography.Text type={"secondary"}>投稿即遵循《SubIT大屏使用协议》</Typography.Text>
									</div>
								</div>
								<div style={{
									width:"calc(50% - 24px)",
									float:"right",
									height:0.1575*(window.screen.availHeight-74),
									padding: 5,
									background: "var(--color-bg-2)",
									boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
									borderRadius: 8,
									flexDirection: "column",
									justifyContent: "flex-start",
									alignItems: "flex-start",
									gap: 10,
									display: "inline-flex"}}>
									<div style={{width:"18.3vw",padding:"7%"}}>
										<Statistic title={"历史投稿（已结束）"} countUp value={historyDrafts.toString()} prefix={<IconHistory/>} suffix={<Typography.Text type={"secondary"}>已结束播放</Typography.Text>}></Statistic>
										<div style={{marginTop: 10}}>
											<Link href={"/dashboard/history"}>去历史投稿<IconRightCircle/></Link>
										</div>
									</div>
								</div>
							</Col>
						</Row>
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