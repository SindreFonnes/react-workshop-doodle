import { useEffect, useState } from "react";

const getConfig = {
	method: "GET",
};
const apiBasePath = "/apis";

function App() {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		const getUserData = async () => {
			const result = await fetch(`${apiBasePath}/users`, getConfig);
			if (result !== null && users === null)
				setUsers(await result.json());
		};
		getUserData();
	}, []);

	return (
		<div className="App">
			<div className="card">
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">{users !== null ? users[0].name : null}</p>
		</div>
	);
}

export default App;
