import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile/Profile";
import Service from "./pages/Service/Service";
import Feature from "./pages/Features/Features"; // Feature 페이지 import
import ServiceList from "./pages/Service/ServiceList";
import ServiceDetail from "./pages/Service/ServiceDetail";
import Sitemap from "./pages/Sitemap/Sitemap";
import SuccessStories from "./pages/SuccessStories/SuccessStories";
import VerificationRequest from "./pages/Verification/VerificationRequest";
import Mypage from "./pages/Mypage/Mypage";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Vision from "./pages/Vision/Vision";



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
			<Route path="/sitemap" element={<Sitemap />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/service" element={<Service />} />
            <Route path="/features" element={<Feature />} /> {/* Feature 라우트 추가 */}
			<Route path="/service-list" element={<ServiceList />} />
			<Route path="/service-detail/:id" element={<ServiceDetail />} /> {/* 라우트 확인 */}
			<Route path="/success-stories" element={<SuccessStories />} /> 
			<Route path="/verification-request" element={<VerificationRequest />} />
			<Route path="/my-page" element={<Mypage />} /> {/* MyPage 라우트 추가 */}
			<Route path="/contact" element={<Contact />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/vision" element={<Vision />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
