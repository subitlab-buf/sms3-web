import "../styles/Login.css";
import {useEffect, useState} from "react";
import "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";


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
	return (
		<div className={"container1"} style={{height: 800*frameScale, gap: 97*frameScale }}>

			<div className={"frame1"} style={{transform: `scale(${frameScale})`,}} >

			</div>
		</div>
	);

}

export default Login;
