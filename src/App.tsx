import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gray-900 text-white">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/certificates" element={<Certificates />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
