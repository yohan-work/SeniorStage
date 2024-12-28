import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // 로그인 사용자 상태

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 사용자 상태 감지
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("로그아웃 실패:", error.message);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">SeniorStage</Link>
        </h1>

        {/* 햄버거 버튼 (모바일) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex space-x-6">
          {user ? (
            <>
              <span className="text-gray-700">안녕하세요, {user.displayName || user.email}님</span>
              <Link to="/profile" className="hover:text-blue-600">
                프로필 작성
              </Link>
              <Link to="/service" className="hover:text-blue-600">
                서비스 등록
              </Link>
			  <Link to="/my-page" className="hover:text-blue-600">
                마이페이지
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-red-600 text-red-500 font-bold"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="hover:text-blue-600">
                회원가입
              </Link>
              <Link to="/login" className="hover:text-blue-600">
                로그인
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        {/* 메뉴 목록 */}
        <nav className="mt-16 px-6 space-y-4">
          {user ? (
            <>
              <span className="block py-2 px-4 text-blue-600 font-bold">
                안녕하세요, {user.displayName || user.email}님
              </span>
              <Link
                to="/profile"
                className="block py-2 px-4 rounded-lg text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition"
                onClick={toggleMenu}
              >
                프로필 작성
              </Link>
              <Link
                to="/service"
                className="block py-2 px-4 rounded-lg text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition"
                onClick={toggleMenu}
              >
                서비스 등록
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="block py-2 px-4 rounded-lg text-red-600 hover:bg-red-100 hover:text-red-800 transition"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="block py-2 px-4 rounded-lg text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition"
                onClick={toggleMenu}
              >
                회원가입
              </Link>
              <Link
                to="/login"
                className="block py-2 px-4 rounded-lg text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition"
                onClick={toggleMenu}
              >
                로그인
              </Link>
            </>
          )}
        </nav>

        {/* 하단 추가 정보 */}
        <div className="absolute bottom-4 w-full px-6">
          <p className="text-sm text-gray-500">
            © 2024 SeniorStage. All rights reserved.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
