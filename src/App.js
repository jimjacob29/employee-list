import './App.css';
import './styles.css';
import MainWrapper from './components/mainWrapper';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="bg-[#8AAAE5] max-h-screen w-screen overflow-auto ">
			<MainWrapper />
			<ToastContainer />
		</div>
	);
}

export default App;
