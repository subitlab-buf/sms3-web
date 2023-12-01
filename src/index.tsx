import "@arco-design/web-react/dist/css/arco.css";
import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Login from "./views/UserLogin";
import AdministratorLogin from "./views/AdministratorLogin";
import Dashboard from "./views/Dashboard";
import Register from "./views/Register";




const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
		errorElement: <Navigate to="/" />,
	},{
		path:"/login",
		element: <Login />,
		errorElement: <Navigate to="/" />,
	},{
		path:"/administratorlogin",
		element: <AdministratorLogin />,
		errorElement: <Navigate to="/" />,

	},{
		path:"/dashboard",
		element:<Dashboard/>,
		errorElement: <Navigate to="/" />,
	},{
		path:"/register",
		element: <Register />,
		errorElement: <Navigate to="/" />,
	}
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
