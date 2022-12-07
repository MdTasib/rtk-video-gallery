import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
import Video from "./components/pages/Video";

function App() {
	return (
		<Router>
			<Navigation />
			<div className='container px-10'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/videos/:videoId' element={<Video />} />
					<Route path='/videos/add' element={<Add />} />
					<Route path='/videos/edit/:videoId' element={<Edit />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
