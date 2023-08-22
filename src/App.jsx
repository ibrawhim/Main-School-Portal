import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import Error from "./pages/Error"
import StudentSignUp from "./pages/StudentSignUp"
import Studentsignin from "./pages/Studentsignin"
import StudentPortal from "./pages/StudentPortal"

function App() {0


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="/student/signup" element={<StudentSignUp/>}/>
        <Route path="/student/signin" element={<Studentsignin/>}/>
        <Route path="/student/portal" element={<StudentPortal/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
