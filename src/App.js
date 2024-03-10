import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeaderContainer from "./components/Header";
import DeviceInfo from "./components/DeviceDetails";
import CustomerDetailsForm from "./components/CustomerDetailsForm";
import ActivityDetails from "./components/ActivityDetails";

function App() {
	return (
		<div>
			<Navbar />
			<HeaderContainer />
			<DeviceInfo />
			<ActivityDetails/>
			<CustomerDetailsForm />
		</div>
	);
}

export default App;
