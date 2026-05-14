
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from "../src/pages/Dashboard/Dashboard"
import LoginForm from './forms/LoginForm'
import ForgotPassword from './forms/ForgotPassword'
import ResetPassword from './forms/ResetPassword'
import OtpVerification from './forms/OtpVerification'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/otp-verification" element={<OtpVerification/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App