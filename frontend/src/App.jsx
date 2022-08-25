import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const getConfig = {
	method: "GET",
};
const apiBasePath = "/apis";

function App() {
	const [count, setCount] = useState(0);
	const [users, setUsers] = useState(null);

	useEffect(() => {
		console.log("Hello there")
		const getUserData = async () => {
			const result = await fetch(`${apiBasePath}/users`, getConfig);
			if (result !== null && users === null)
				setUsers(await result.json());
		};
		getUserData();
	}, []);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">{users !== null ? users[0].name : null}</p>
		</div>
	);
}

export default App;
