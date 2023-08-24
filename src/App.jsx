import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import Error from "./pages/Error"
import StudentSignUp from "./pages/StudentSignUp"
import Studentsignin from "./pages/Studentsignin"
import StudentPortal from "./pages/StudentPortal"
import SideBar from "./pages/StudentPortal"
import Main from "./pages/Main"
import Profile from "./pages/Profile"
import Pay from "./pages/Pay"
import PayHistory from "./pages/PayHistory"


function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path='/home' element={<Navigate to='/'/>}/>
        <Route path="/student/signup" element={<StudentSignUp/>}/>
        <Route path="/student/signin" element={<Studentsignin/>}/>
        <Route path="portal/*" element={<StudentPortal/>}/>
        <Route path="/side"  element={<SideBar/>}/>
        <Route path="/dash"  element={<Main/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/pay" element={<Pay/>}/>
        <Route path="/payhistory" element={<PayHistory/>}/>
        <Route path="/payhistory" element={<PayHistory/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
