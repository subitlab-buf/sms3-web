import "../../styles/Dashboard.css";
import "../../components/Logo";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {useEffect, useState} from "react";
import {
	Button,
	Space,
	Menu,
	Layout,
	Grid,
	Link,
	Steps, Typography, Statistic, Radio, List, Dropdown, Empty, Message
} from "@arco-design/web-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
	IconDown,
	IconHistory, IconPlus, IconQuestionCircle,
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
const Row = Grid.Row;
const Col = Grid.Col;
const Step = Steps.Step;

const links = [
	{name: "大屏使用指南", href:"https://www.bilibili.com/video/BV1yL411K7CP/"},
	{name: "SubIT大屏使用协议", href:"https://www.bilibili.com/video/BV1yL411K7CP/"},
	{name: "北大附中门户", href:"https://www.bilibili.com/video/BV1yL411K7CP/"},
	{name: "SubIT 社团官网", href:"https://www.bilibili.com/video/BV1yL411K7CP/"},
	{name: "北大附中o365", href:"https://www.bilibili.com/video/BV1yL411K7CP/"},];






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
			return res;
		} else {
			throw new Error("获取用户信息失败");
		}

	} catch (error) {
		console.log(error);
		throw error;
	}
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getUserDrafts = async () => {
	try {
		const token = localStorage.getItem("token");
		const res = await axios.get("http://182.92.67.83:10718/draft/getDraft", {
			headers: {
				"Authorization": "Bearer" + token,
				"Content-Type": "application/json"
			},
			params: {
				length: 50
			}
		});

		if (res.data.code === 10000) {
			console.log(res.data);
			return res;
		} else if (res.data.code === 50003) {
			throw new Error("获取用户投稿列表失败");
		}

	} catch (error) {
		console.log(error);
		throw error;
	}
};

const getScreens = async () => {
	try {
		const res = await axios.get("http://182.92.67.83:10718/screen/getAll", {});

		if (res.data.code === 10000) {
			console.log(res.data);
			return res;
		} else {
			throw new Error("获取大屏列表失败");
		}

	} catch (error) {
		console.log(error);
		throw error;
	}
};

const getNotices = async () => {
	try {
		const token = localStorage.getItem("token");
		const res = await axios.get("http://182.92.67.83:10718/notice/getAll", {
			headers: {
				"Authorization": "Bearer" + token,
				"Content-Type": "application/json"
			},
			params: {
				page: 1,
				length: 1
			}
		});

		if (res.data.code === 10000) {
			console.log(res.data);
			return res;
		} else {
			throw new Error("获取通知列表失败");
		}

	} catch (error) {
		console.log(error);
		throw error;
	}
};


let userInfo: any;
let drafts: any;
let screens: any;
let notices: any;

const handleErrors = async () => {
	try {
		userInfo = await getUserInfo();
		drafts = await getUserDrafts();
		screens = await getScreens();
		notices = await getNotices();

	} catch (error) {
		console.log(error);
		let token = localStorage.getItem("token");
		console.log(token);
		if(token !== "" && token !== null){
			Message.error("获取用户信息失败");
		}
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


screens = {
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

notices = {
	"code": 10000,
	"message": "success",
	"data": [
		{
			"noticeId": "34db6d9c-29b1-40f3-b608-d27c9e157daa",
			"title": "test",
			"content": "欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。"+"欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。欢迎使用SubIT大屏管理系统！投稿前可查看大屏使用指南。",
			"source": "subit",
			"createTime": 1701187999999,
			"files": null
		},
		{
			"noticeId": "74b96e90-4953-4fab-acd7-2571f34ec198",
			"title": "test",
			"content": "test",
			"source": "subit",
			"createTime": 1701187316861,
			"files": null
		},
		{
			"noticeId": "b8e49bad-81b7-43de-81cc-21a117ffe4e3",
			"title": "test",
			"content": "test",
			"source": "subit",
			"createTime": 1701187291471,
			"files": null
		}
	],
	"timeStamp": 1701187499267
};

//将screens处理为RadioGroup可传入值
let screenOptions:any = [];
let screenContents:any = [];
for(let i =0; i<screens.data.length; i++){
	screenOptions.push({value:i,label:screens.data[i].screenId});
	screenContents.push(getScreenContent(screens.data[i].screenId));
}

screenContents = [[
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
],[
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
],[
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
]];

let historyDrafts = 0;
drafts.data.draftInfoList.map((draft:any) => { // @ts-ignore
	if(draft.status === 1 && draft.permittedEnd < Date.parse(new Date())){
		historyDrafts += 1;
	}
	return draft;
} );


async function getScreenContent(srceenID:any){
	let returnData:any = undefined;

	try {
		const res = await axios.get("http://182.92.67.83:10718/screen/getDraft",{
			headers:{
				"screenId":srceenID,
				"beginTime":0,
				"endTime": Number(Date.now())
			}
		});

		if(res.data.code === 10000){
			console.log(res.data);
			returnData = res;
		}else{
			throw new Error(res.data.message);
		}

	}catch (error){
		console.log(error);
	}
	//TODO:获取指定到大屏投稿
	returnData = {
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
	return(returnData.data.draftInfoList);

}



//从通知列表获取最新通知
let displayNotice = notices.data.sort((a:any, b:any) => b.createTime - a.createTime)[0];


function MainPage()
{
	const  navigate = useNavigate();

	const [displayScreen, setExhibitScreen] = useState(0);
	const [spacerSize, setSpacerSize] = useState((window.innerWidth < 768 ? 12 : 24));
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	const [availableHeight, setAvailableHeight] = useState(window.screen.availHeight);

	useEffect(() => {
		// 创建一个事件处理函数，用于在窗口大小改变时更新 innerWidth
		const handleResize = () => {
			setInnerWidth(window.innerWidth);
			setAvailableHeight(window.screen.availHeight);
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

	// @ts-ignore
	return (
		<Layout>
			<Header style={{height:109/800*(availableHeight-74),width:"100%",minHeight:109}}>
				<Row style={{height:"100%",display:"flex",flexDirection:"row",overflow:"hidden"}} justify={"space-between"}>
					<Col flex={`${(innerWidth<768 ? innerWidth - 200 : 300)}px`} style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"start"}}>
						<div style={{marginBottom:16, paddingLeft:spacerSize, flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: 4, display: "inline-flex"}}>
							<Typography.Title heading={6}>工作台</Typography.Title>
							<Typography.Text type={"secondary"}>下午好，{userInfo.data.realName}。欢迎使用SubIT大屏系统。</Typography.Text>
						</div>
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
				<Row justify={"start"} align={"start"}>
					<Col md={14} sm={24} style={((innerWidth<768 ? {paddingLeft:spacerSize, paddingRight: spacerSize} : {paddingLeft:spacerSize}))}>
						<Row>
							{innerWidth >= 768 ?
								<Col span={24}>
									<div  style={{
										width:`calc(50% - ${spacerSize}px)`,
										float:"left",
										overflow:"hidden",
										height:0.1575*(availableHeight-74),
										padding: 5,
										background: "var(--color-bg-2)",
										boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
										borderRadius: 8,
										flexDirection: "column",
										justifyContent: "flex-start",
										alignItems: "flex-start",
										display: "inline-flex",
										minHeight:126
									}}>
										<div style={{width:"100%",padding:16,display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"}}>
											<Typography.Paragraph style={{margin:0}}>
												<Typography.Title  style={{margin: 0}} heading={6}>新增一条投稿</Typography.Title>
											</Typography.Paragraph>
											<Button type={"primary"} size={"large"} style={{marginTop:8,width:116}} onClick={() => {navigate("/dashboard/submission/create");}}><IconPlus/>立即投稿</Button>
											<Typography.Text type={"secondary"} style={{width:"80%"}}>投稿即遵循《SubIT大屏使用协议》</Typography.Text>
										</div>
									</div>
									<div style={{
										width:`calc(50% - ${spacerSize}px)`,
										float:"right",
										height:0.1575*(availableHeight-74),
										padding: 5,
										background: "var(--color-bg-2)",
										boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
										borderRadius: 8,
										flexDirection: "column",
										justifyContent: "flex-start",
										alignItems: "flex-start",
										display: "inline-flex",
										minHeight:126
									}}>
										<div style={{width:"100%",padding:16,display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"}}>
											<Statistic title={"历史投稿（已结束）"} countUp value={historyDrafts.toString()} prefix={<IconHistory/>} suffix={<Typography.Text type={"secondary"}>已结束播放</Typography.Text>}></Statistic>
											<div style={{marginTop: 10}}>
												<Link onClick={() => {navigate("/dashboard/history");}}>去历史投稿<IconRightCircle/></Link>
											</div>
										</div>
									</div>
								</Col>
								:
								<Col span={24}>
									<Col span={24}  style={{
										float:"left",
										overflow:"hidden",
										height:0.1575*(availableHeight-74),
										padding: 5,
										background: "var(--color-bg-2)",
										boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
										borderRadius: 8,
										flexDirection: "column",
										justifyContent: "flex-start",
										alignItems: "flex-start",
										display: "inline-flex",
										minHeight:126
									}}>
										<div style={{width:"100%",padding:16,display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"}}>
											<Typography.Paragraph style={{margin:0}}>
												<Typography.Title  style={{margin: 0}} heading={6}>新增一条投稿</Typography.Title>
											</Typography.Paragraph>
											<Button type={"primary"} size={"large"} style={{marginTop:8,width:116}} onClick={() => {navigate("/dashboard/submission/create");}}>立即投稿</Button>
											<Typography.Text type={"secondary"}>投稿即遵循《SubIT大屏使用协议》</Typography.Text>
										</div>
									</Col>
									<Col span={24} style={{
										marginTop:spacerSize,
										float:"right",
										height:0.1575*(availableHeight-74),
										padding: 5,
										background: "var(--color-bg-2)",
										boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
										borderRadius: 8,
										flexDirection: "column",
										justifyContent: "flex-start",
										alignItems: "flex-start",
										display: "inline-flex",
										minHeight:126
									}}>
										<div style={{width:"100%",padding:16,display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"}}>
											<Statistic title={"历史投稿（已结束）"} countUp value={historyDrafts.toString()} prefix={<IconHistory/>} suffix={<Typography.Text type={"secondary"}>已结束播放</Typography.Text>}></Statistic>
											<div style={{marginTop: 10}}>
												<Link onClick={() => {navigate("/dashboard/history");}}>去历史投稿<IconRightCircle/></Link>
											</div>
										</div>
									</Col>
								</Col>
							}
							<Col style={{height:0.36875*(availableHeight-74),
								marginTop:spacerSize,
								paddingTop: 21,
								paddingBottom: 18,
								paddingLeft: 12,
								paddingRight: 21,
								background: "var(--color-bg-2)",
								boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
								borderRadius: 8,
								overflow: "hidden",
								justifyContent: "flex-start",
								alignItems: "center",
								display: "inline-flex",
								minHeight:(innerWidth >= 768 ? 340 : 350)
							}}>
								<div style={{width:"100%", height:"100%", paddingLeft:9, paddingRight:9, overflow:"hidden"}}>
									<div style={{width: 128, height: 24, justifyContent: "flex-start", alignItems: "center", gap: 4, display: "inline-flex"}}>
										<Typography.Paragraph style={{margin:0}}>
											<Typography.Title  style={{margin: 0}} heading={6}>当前投稿审核进度</Typography.Title>
										</Typography.Paragraph>
									</div>
									<div style={{marginTop:20,paddingLeft:17,paddingRight:17, flexDirection:(innerWidth > 1200 ? "column" : "row"),justifyContent:"space-between",height:"calc(100% - 80px)"}}>
										{drafts.data.draftInfoList.length < 1 ?
											<div>
												<Empty description={"首次使用？快来投稿吧"}/>
											</div>
											: (innerWidth > 1200  ? drafts.data.draftInfoList.slice(0,3).map((draft:any) => {
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
												default:return null;
												}}) :
												//宽度不够时
												<Row justify={"space-between"} align={"start"}>
													{drafts.data.draftInfoList.slice(0,(innerWidth >= 576 ? 3 : 2)).map((draft:any) => {
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
														default:return null;
														}})}
												</Row>)}
									</div>
									<div style={{marginTop: 10}}>
										<Link onClick={() => {navigate("/dashboard/submission");}}>查看具体<IconRightCircle/></Link>
									</div>
								</div>
							</Col>
							<Col style={{height:0.25*(availableHeight-74),
								marginTop:spacerSize,
								paddingTop: 17,
								paddingBottom: 17,
								paddingLeft: 22,
								paddingRight: 13,
								background: "var(--color-bg-2)",
								boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
								borderRadius: 8,
								overflow: "hidden",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								gap: 17,
								display: "inline-flex",
								minHeight:174
							}}>
								<Row style={{width:"100%",
									height:24,
									marginBottom:17,
									display:"inline-flex",
									alignItems:"center",
									justifyContent:"center",
									flexDirection:"column"}}>
									<Col span={8} style={{display:"flex", flexDirection:"column", alignItems:"start"}}>
										<Typography.Paragraph style={{margin:0}}>
											<Typography.Title  style={{margin: 0}} heading={6}>当前播放列表</Typography.Title>
										</Typography.Paragraph>
									</Col>
									<Col span={16} style={{display:"flex", flexDirection:"column", alignItems:"end"}}>
										<Radio.Group options={screenOptions} value={displayScreen} onChange={(value) => {setExhibitScreen(value);
										}} type={"button"} size={"default"} defaultValue={screens.data[0].screenId}>
										</Radio.Group>
									</Col>
								</Row>
								<Row  style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
									<List bordered={false} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
										{screenContents[displayScreen].map((draft:any) => {return(<List.Item key={draft.title} style={{width:"100%"}}>{ draft.title}</List.Item>);})}
									</List>
								</Row>
							</Col>
						</Row>
					</Col>
					{/*
					以上为左侧栏，以下为右侧栏
					*/}

					{innerWidth >= 768 ?
						<Col md={7} sm={24} style={((innerWidth<768 ? {paddingLeft:spacerSize, paddingRight: spacerSize} : {paddingLeft:spacerSize}))}>
							<Col md={24} xs={12} style={{
								float:"left",
								height:0.35125*(availableHeight-74),
								paddingTop: 21,
								paddingBottom: 25,
								paddingLeft: 12,
								paddingRight: 14,
								background: "var(--color-bg-2)",
								boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
								borderRadius: 8,
								overflow: "hidden",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								gap: 17,
								display: "inline-flex",
								minHeight:281
							}}>
								<Typography.Paragraph style={{margin:0}}>
									<Typography.Title  style={{margin: 0}} heading={6}>管理员公告</Typography.Title>
								</Typography.Paragraph>
								<Typography.Text style={{height:"calc( 100% - 24px)"}} ellipsis={{ rows: 5}}>{displayNotice.content}</Typography.Text>
								<Link href={"mailto:subit@i.pkuschool.edu.cn"} style={{flex:1,alignItems:"flex-end",display:"flex"}}>邮件联系我们<IconRightCircle/></Link>
							</Col>
							<Col md={24} xs={12}  style={{
								float:"right",
								marginTop:17,
								paddingTop: 21,
								paddingBottom: 23,
								paddingLeft: 12,
								paddingRight: 14,
								background: "var(--color-bg-2)",
								boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
								borderRadius: 8,
								overflow: "hidden",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								gap: 17,
								display: "inline-flex",
							}}>
								<Space  direction={"vertical"} style={{display:"flex",flexDirection:"column", alignItems:"flex-start",height:"100%",justifyContent:"start"}}>
									<Typography.Paragraph style={{margin:0}}>
										<Typography.Title  style={{margin: 0}} heading={6}>常用链接</Typography.Title>
									</Typography.Paragraph>
									{links.map(thisLink => <Link key={thisLink.name} href={thisLink.href} style={{marginTop:5, fontSize: 14, fontFamily: "PingFang SC", fontWeight: "400", wordWrap: "break-word"}} icon>{thisLink.name}</Link>)}
								</Space >
							</Col>
						</Col>
						:
						<Col md={7} sm={24} style={((innerWidth<768 ? {paddingLeft:spacerSize, paddingRight: spacerSize, paddingTop:spacerSize} : {paddingLeft:24}))}>
							<div style={{
								width:`calc(50% - ${24 + spacerSize}px)`,
								paddingTop: 21,
								paddingBottom: 25,
								paddingLeft: 12,
								paddingRight: 14,
								background: "var(--color-bg-2)",
								boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
								borderRadius: 8,
								overflow: "hidden",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								gap: 17,
								display: "inline-flex",
								minHeight:243,
							}}>
								<Typography.Paragraph style={{margin:0}}>
									<Typography.Title  style={{margin: 0}} heading={6}>管理员公告</Typography.Title>
								</Typography.Paragraph>
								<Typography.Text style={{height:"calc( 100% - 24px)"}} ellipsis={{ rows: 5}}>{displayNotice.content}</Typography.Text>
								<Link href={"mailto:subit@i.pkuschool.edu.cn"} style={{flex:1,alignItems:"flex-end",display:"flex"}}>邮件联系我们<IconRightCircle/></Link>
							</div>
							<div  style={{
								float:"right",
								width:`calc(50% - ${24 + spacerSize}px)`,
								minHeight:243,
								paddingTop: 21,
								paddingBottom: 23,
								paddingLeft: 12,
								paddingRight: 14,
								background: "var(--color-bg-2)",
								boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
								borderRadius: 8,
								overflow: "hidden",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								gap: 17,
								display: "inline-flex"
							}}>
								<Space  direction={"vertical"} style={{display:"flex",flexDirection:"column", alignItems:"flex-start",height:"100%",justifyContent:"start"}}>
									<Typography.Paragraph style={{margin:0}}>
										<Typography.Title  style={{margin: 0}} heading={6}>常用链接</Typography.Title>
									</Typography.Paragraph>
									{links.map(thisLink => <Link key={thisLink.name} href={thisLink.href} style={{marginTop:5, fontSize: 14, fontFamily: "PingFang SC", fontWeight: "400", wordWrap: "break-word"}} icon>{thisLink.name}</Link>)}
								</Space >
							</div>
						</Col>}
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