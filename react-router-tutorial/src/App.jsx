
import { Navbar } from "./routes/components/Navbar"
import { Routes, Route } from "react-router-dom"
import {AboutScreen} from './routes/AboutScreen'
import {HomeScreen} from './routes/HomeScreen'
import {ContactScreen} from './routes/ContactScreen'
import { Navigate } from "react-router-dom"
import { UserProvider } from "./routes/context/UserProvider"
import { LoginScreen } from "./routes/LoginScreen"

export const App = () => {
    return (
        <UserProvider>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
                <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
                <Route path="/about" element={<AboutScreen></AboutScreen>}></Route>
                <Route path="/contact" element={<ContactScreen></ContactScreen>}></Route>
                <Route path="/*" element={<Navigate to='/'></Navigate>}></Route>
            </Routes>
        </UserProvider>
    )
}