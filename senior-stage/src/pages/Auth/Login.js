import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // 현재 로그인한 사용자 정보
  const [message, setMessage] = useState("");

  // 사용자 상태 감지
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage(`환영합니다, ${userCredential.user.email}!`);
    } catch (error) {
      console.error("로그인 실패:", error.message);
      setMessage("로그인 실패: " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage("로그아웃 성공!");
      setUser(null);
    } catch (error) {
      console.error("로그아웃 실패:", error.message);
    }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      {user ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">안녕하세요, {user.email}님!</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-8 py-2 rounded-lg hover:bg-red-400"
          >
            로그아웃
          </button>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">로그인</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">이메일</label>
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 font-bold"
            >
              로그인
            </button>
          </form>
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </div>
      )}
    </div>
  );
}

export default Login;
