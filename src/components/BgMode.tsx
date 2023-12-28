import {Button} from "@arco-design/web-react";
import {IconMoon, IconSun} from "@arco-design/web-react/icon";
import {useState} from "react";

function BgMode() {
	const [bgMode, setBgMode] = useState(document.body.getAttribute("arco-theme"));

	function toLightMode(){
		document.body.setAttribute("arco-theme", "light");
		setBgMode("light");
	}

	function toDarkMode(){
		document.body.setAttribute("arco-theme", "dark");
		setBgMode("dark");
	}


	return (<Button shape={"round"} size={"small"} icon={(bgMode === "dark"? <IconMoon/> : <IconSun/>)} onClick={(bgMode === "dark"? toLightMode : toDarkMode)}></Button>);
}

export default BgMode;