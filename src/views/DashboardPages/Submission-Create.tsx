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
	Grid, Dropdown, Typography, Form, Input, DatePicker, Upload, Message
} from "@arco-design/web-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
	IconDown, IconHome, IconQuestionCircle,
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



function SubmissionCreate()
{
	const  navigate = useNavigate();
	const [spacerSize, setSpacerSize] = useState((window.innerWidth < 768 ? 12 : 24));
	const [availableHeight, setAvailableHeight] = useState(window.screen.availHeight);
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);


	const dropList = <Menu>
		<MenuItem key={"1"}>个人中心</MenuItem>
		<MenuItem key={"2"}>修改密码</MenuItem>
		<MenuItem key={"3"}>退出登录</MenuItem>
	</Menu>;

	const breadCrumbs = [
		{navigate:"/dashboard/main", content:"主页", icon:<IconHome/>},
		{navigate:"/dashboard/submission", content:"立即投稿", icon:null},
		{navigate:"/dashboard/submission/create", content:"新建投稿", icon:null},
	];


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

	const isAcceptFile = (file:any, accept:any) => {
		if (accept && file) {
			const accepts = Array.isArray(accept)
				? accept
				: accept
					.split(",")
					.map((x:any) => x.trim())
					.filter((x:any) => x);
			const fileExtension = file.name.indexOf(".") > -1 ? file.name.split(".").pop() : "";
			return accepts.some((type:any) => {
				const text = type && type.toLowerCase();
				const fileType = (file.type || "").toLowerCase();
				if (text === fileType) {
					return true;
				}
				if (new RegExp("\/\*").test(text)) {
					const regExp = new RegExp("\/.*$");
					return fileType.replace(regExp, "") === text.replace(regExp, "");
				}
				if (new RegExp("\..*").test(text)) {
					return text === `.${fileExtension && fileExtension.toLowerCase()}`;
				}
				return false;
			});
		}
		return !!file;
	};


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
				<Row justify={"start"} align={"start"}>
					<Col span={20} style={{paddingLeft:24}}>
						<Row>
							<Col span={24} style={{
								width:"calc(50% - 24px)",
								float:"left",
								overflow:"hidden",
								padding: 24,
								background: "var(--color-bg-2)",
								boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.10)",
								borderRadius: 8,
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "flex-start",
								gap: 10,
								display: "inline-flex"}}>
								<Typography.Paragraph style={{margin:0,height:24}}>
									<Typography.Title style={{margin: 0}} heading={6}>新增投稿</Typography.Title>
								</Typography.Paragraph>
								<Col xl={16} xs={24} sm={24} style={{marginTop:spacerSize,paddingRight:spacerSize}}>
									<Form autoComplete='off' layout={"horizontal"}>
										<Form.Item label={"标题"} rules={[{required:true}]} extra={"例：行知学院-xx组-xx活动宣传"}>
											<Input size={"large"} placeholder={"请输入投稿标题"}></Input>
										</Form.Item>
										<Form.Item label={"申请投放日期"} rules={[{required:true}]} extra={"选择海报投放日期（不超过7天）"}>
											<DatePicker.RangePicker style={{width:"100%"}}/>
										</Form.Item>
										<Form.Item label={"备注"} extra={"描述投放内容的原因及活动目的。\n" +
											"如投放张数大于两张，或投放时间大于5天，请适当说明。"}>
											<Input.TextArea>

											</Input.TextArea>
										</Form.Item>
										<Form.Item label={"上传文件"} rules={[{required:true}]}>
											<Upload  drag  multiple={true} action='/' accept={".jpg,.png,.pdf"} onDrop={(e) => {
												let uploadFile = e.dataTransfer.files[0];
												if (isAcceptFile(uploadFile, ".jpg,.png,.pdf")) {
													return;
												} else {
													Message.info("不接受的文件类型，请重新上传指定文件类型~");
												}
											}} tip='仅限pdf, png, jpg格式,文件大小不超过50MB'/>
											<Button type={"primary"} style={{marginTop:15}} >确认提交</Button>
										</Form.Item>
									</Form>
								</Col>
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
export default SubmissionCreate;