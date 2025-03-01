import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

  import Footer from "./components/Footer"
const App = () => {
  return (
   <Router>
    {/* {Navbar} */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="./card" element={<Card/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    {/* {Footer} */}
    <Footer />
   </Router>
  )
}

export default App



