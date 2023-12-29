import "@arco-design/web-react/dist/css/arco.css";
import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter, Outlet,
} from "react-router-dom";
import Login from "./views/UserLogin";
import Dashboard from "./views/Dashboard";
import Register from "./views/Register";

import MainPage from "./views/DashboardPages/MainPage";
import Submission from "./views/DashboardPages/Submission";
import SubmissionCreate from "./views/DashboardPages/Submission-Create";



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
		path:"/dashboard",
		element:<Dashboard/>,
		// errorElement: <Navigate to="/" />,
		children:[
			{
				path:"",
				element:<MainPage />,
			},
			{
				path:"main",
				element:<MainPage />,
			},{
				path:"submission",
				element:<>
					<Outlet/>
				</>,
				children:[{
					path:"",
					element:<Submission />,
				}, {
					path:"create",
					element:<SubmissionCreate />,
				}]
			},{
				path:"history",
				element:<MainPage />,
			},{
				path:"userinfo",
				element:<MainPage />,
			}
		]
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
