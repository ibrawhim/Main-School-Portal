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
import Course from "./pages/Course"
import Notice from "./pages/Notice"
import Help from "./pages/Help"
import Congratulation from "./pages/Congratulation"
import Chat from "./pages/Chat"
import socketClient from 'socket.io-client'
import { useEffect, useRef} from "react"



function App() {
  
  let socket = useRef()
  console.log(socket)
  useEffect(() => {
    let url = 'http://localhost:4223/'
    socket.current = socketClient(url)
  }, [])
  

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
        <Route path="/course" element={<Course/>}/>
        <Route path="/notice" element={<Notice/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/congrat" element={<Congratulation/>}/>
        <Route path="/chat" element={<Chat socket={socket}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
