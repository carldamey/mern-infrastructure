import {useState} from "react"
import NewOrderPage from "../NewOrderPage/NewOrderPage"
import AuthPage from "../AuthPage/AuthPage"
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage"
import {Routes, Route} from "react-router-dom"
import NavBar from "../../components/NavBar"
import {getUser} from "../../utilities/users-service"
import "./App.css"

export default function App() {
	const [user, setUser] = useState(getUser())

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} />
					<Routes>
						<Route path="/orders/new" element={<NewOrderPage />} />
						<Route path="/orders" element={<OrderHistoryPage />} />
					</Routes>
				</>
			) : (
				<AuthPage />
			)}
		</main>
	)
}
