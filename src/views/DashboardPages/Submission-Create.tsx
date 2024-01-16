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
	Grid, Dropdown, Typography, Form, Input, DatePicker, Upload, Message, Select, Popconfirm
} from "@arco-design/web-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
	IconDown, IconHome, IconQuestionCircle,
} from "@arco-design/web-react/icon";
import "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import {useNavigate} from "react-router-dom";
import "resize-observer-polyfill";
import axios from "axios";
const MenuItem = Menu.Item;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const BreadcrumbItem = Breadcrumb.Item;
const Row = Grid.Row;
const Col = Grid.Col;


const getUserInfo =  () => {
	// Use sms4-net-front instead.
};

const getScreens =  async ()  => {
	// Use sms4-net-front instead.
};

let screens:any = getScreens();
let userInfo:any = getUserInfo();

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

const screenOptions = screens.data.map((screen:any) => screen.screenId);
// const uploadNewFile = (file:File) => {};

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


	//在窗口大小改变时获取窗口大小和屏幕大小（该项适用于移动端）
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


	const [title, setTitle] = useState<string>();
	const [dateRange, setDateRange] = useState<[number, number]>();
	const [description, setDescription] = useState<string>();
	const [screenID, setScreenID] = useState<string>();
	const [fileList,setFileList] = useState<{fileName:any,index:number,originName:string}[]>([{fileName:"111",index:0,originName:"111"}]);


	//文件格式要求
	const acceptFiles = ".jpg,.jpeg,.png,.pdf,.doc,.docx,.ppt,.pptx,.mp4,.zip";

	//检查传入文件是否符合格式，若不符合则不进行上传
	//Upload回调函数一部分
	const isAcceptFile = (file:File, accept:any):boolean => {
		// 检查是否指定了文件类型和是否传入了文件对象
		if (accept && file) {
			// 将 accept 转换为数组，如果原本就是数组则保持不变
			const accepts = Array.isArray(accept)
				? accept
				: accept
					.split(",")  // 如果是字符串，则按逗号分隔为数组
					.map((x:any) => x.trim())  // 去除每个元素的首尾空格
					.filter((x:any) => x);  // 过滤掉空字符串元素


			// 获取文件的扩展名
			const fileExtension = file.name.indexOf(".") > -1 ? "." + file.name.split(".").pop() : "";

			// 检查文件类型是否符合指定的 accept 类型之一
			return accepts.some((type:any) => {
				const text = type && type.toLowerCase();  // 将 accept 类型转换为小写
				return fileExtension?.toLowerCase() === text;
			});
		}

		// 如果未指定文件类型或未传入文件对象，则默认为符合条件
		return !!file;
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleSubmit =  async() => {

		//@ts-ignore
		if(title !== null && dateRange !== null && screenID != null && description !== null && dateRange[0] > Date.now() && fileList.filter(f => {if (f.fileName !== "uploadFailed"){return f;}}).length >= 1){
			try {
				console.log(1);

				const token = localStorage.getItem("token");

				console.log({
					headers:{
						"Authorization":"Bearer" + token,
						"Content-Type": "application/json"
					},data:{
						"title": title,
						// @ts-ignore
						"startDate": dateRange[0],
						// @ts-ignore
						"endDate": dateRange[1],
						"description": description,
						"fileName":fileList.filter(f => {if (f.fileName !== "uploadFailed"){return f;}}),
						"screenId": screenID
					}
				});

				axios.post("http://182.92.67.83:10718/draft/create",{
					headers:{
						"Authorization":"Bearer" + token,
						"Content-Type": "application/json"
					},data:{
						"title": title,
						// @ts-ignore
						"startDate": dateRange[0],
						// @ts-ignore
						"endDate": dateRange[1],
						"description": description,
						"fileName":fileList.filter(f => {if (f.fileName !== "uploadFailed"){return f;}}),
						"screenId": screenID
					}
				}).then(res => {
					if(res.data.code === 10000){
						Message.success("投稿上传成功");
						navigate("/dashboard/create");
					}else {
						Message.error(`投稿上传失败，错误码${res.data.code}`);
					}
				}).catch(error =>{
					Message.error(`投稿上传失败,原因:${error.toString().substring(11)}`);
				});
			}catch(error){
				console.log(error);
			}
		}else {
			Message.error("您尚有任何文件上传成功");
		}
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
										<Form.Item field='标题' label={"标题"} rules={[{required:true}]} extra={"例：行知学院-xx组-xx活动宣传"}>
											<Input size={"large"} value={title} onChange={value => {setTitle(value);}} placeholder={"请输入投稿标题"}></Input>
										</Form.Item>
										<Form.Item  field='大屏'  label={"大屏"} rules={[{required:true}]} extra={"选择你要投放的大屏即可"}>
											<Select size={"large"} value={screenID} onChange={value => {setScreenID(value);}} placeholder={"请选择投放的大屏"}>
												{screenOptions.map((s:string) => (<Select.Option value={s} key={s}>{s}</Select.Option>))}
											</Select>
										</Form.Item>
										<Form.Item  field='申请投放日期'  label={"申请投放日期"} rules={[{required:true}]} extra={"选择海报投放日期（不超过7天）"}>
											<DatePicker.RangePicker value={dateRange} onChange={(value) => { // @ts-ignore
												setDateRange(value);}} style={{width:"100%"}}/>
										</Form.Item>
										<Form.Item field='备注' label={"备注"} rules={[{required:true}]} extra={"描述投放内容的原因及活动目的。\n" +
											"如投放张数大于两张，或投放时间大于5天，请适当说明。"}>
											<Input.TextArea value={description} onChange={value => {setDescription(value);}}>

											</Input.TextArea>
										</Form.Item>
										<Form.Item field='文件' label={"上传文件"} rules={[{required:true}]}>
											<Upload customRequest={(option) => {

												// eslint-disable-next-line @typescript-eslint/no-unused-vars
												const { onProgress, onError, onSuccess, file } = option;
												const token = localStorage.getItem("token");
												const controller = new AbortController();

												const onUploadProgress = (progressEvent: any) => {
													const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
													onProgress((percentCompleted.toString(),10),progressEvent);
												};

												axios.post("http://182.92.67.83:10718/file/postDraftFile",{
													headers:{
														"Authorization":"Bearer" + token,
														"Content-Type": "application/json"
													},data:{
														"file":file
													}, onUploadProgress: onUploadProgress
												}).then(res => {
													if(res.data.code === 10000){
														console.log(res.data);
														setFileList(
															fileList.concat({fileName:res.data.data,index:fileList.length,originName:file.name}));
													}else {
														Message.error("文件发送失败");
														setFileList(fileList.concat({fileName:"uploadFailed",index:fileList.length,originName:file.name}));
													}
												}).catch(error =>{
													option.onError();
													setFileList(
														fileList.concat({fileName:"uploadFailed",index:fileList.length,originName:file.name}));
												});

												return {
													abort() {
														controller.abort();
														fileList.filter((f) => {if (f.fileName !== file.name){
															return f;
														}});
													}
												};

											}}  drag={true}  beforeUpload={(file) => {
												if(file.size <= 50 * 1024 * 1024){
													if(isAcceptFile(file , acceptFiles)){
														return true;
													}else {
														Message.error("不接受的文件类型捏，请重新上传指定文件类型~");
														return false;
													}
												}else{
													Message.error("文件大小超出限制捏~");
													return false;
												}}
											} tip={`仅限${acceptFiles}格式    文件大小不超过50MB`}
											onRemove={(file) => {console.log(file.name);}}/>
											<Popconfirm
												title={(fileList.filter(f => {if (f.fileName === "uploadFailed"){return f;}}).length <=0 ? "你确定要上传投稿吗?" : "还有文件尚未上传成功，是否继续提交")}
												onOk={handleSubmit}
												onCancel={() => {
													Message.error({
														content: "取消提交",
													});
												}}
												focusLock>
												<Button type={"primary"} style={{marginTop:15}} htmlType='submit'>确认提交</Button></Popconfirm>
										</Form.Item>
									</Form>
								</Col>
								{
									//只是用来显示fileList的debug用
								}
								<Col span={24} style={{marginTop:spacerSize,paddingRight:spacerSize}}>
									{fileList.map((f) => <div style={{width:300,borderColor:(f.fileName === "uploadFailed" ? "red" : "rgb(var(--primary-6))"), color:(f.fileName === "uploadFailed" ? "red" : "rgb(var(--primary-6))"), borderWidth:2	,marginTop:10, borderStyle:"solid", borderRadius:10, padding:10}} key={f.index}><div>fileName: {f.fileName}</div><div>originName: {f.originName}</div></div>)}
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