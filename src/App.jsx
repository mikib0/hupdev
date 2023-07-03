import { Outlet } from "react-router-dom"
import { Footer, Navbar, NewsLetter } from "./components"


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
