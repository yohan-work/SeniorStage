import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MyPage() {
  // 검증 상태를 관리하기 위한 state
  const [verificationStatus, setVerificationStatus] = useState("pending"); // "pending", "approved", "rejected"

  // 서버에서 검증 상태를 가져오는 예시 (여기선 Mock 데이터 사용)
  useEffect(() => {
    // 예: 서버로부터 검증 상태를 가져오는 로직
    // 실제로는 fetch 또는 axios를 사용해 데이터를 가져오면 됩니다.
    const mockVerificationStatus = "pending"; // "approved"로 하드코딩
    setVerificationStatus(mockVerificationStatus);
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">마이페이지</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">안녕하세요, 사용자님!</h2>
        <p className="text-lg mb-6">
          시니어스테이지 플랫폼에서 나의 프로필을 관리하고 서비스를 확인하세요.
        </p>

        {/* 인증 상태 섹션 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">인증 상태</h3>
          {verificationStatus === "pending" && (
            <p className="text-yellow-500">
              인증 요청이 접수되었습니다. 관리자의 확인을 기다려주세요.
            </p>
          )}
          {verificationStatus === "approved" && (
            <p className="text-green-500">
              인증이 완료되었습니다! 이제 신뢰성 있는 서비스 제공자로 활동할 수 있습니다.
            </p>
          )}
          {verificationStatus === "rejected" && (
            <p className="text-red-500">
              인증 요청이 거부되었습니다. 다시 요청하시거나 관리자에게 문의하세요.
            </p>
          )}
        </div>

        {/* 인증 요청 버튼 (인증이 완료되지 않았을 때만 표시) */}
        {verificationStatus !== "approved" && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">인증 요청</h3>
            <p className="mb-4">
              프로필 인증을 완료하여 더 신뢰성 있는 서비스를 제공하세요.
            </p>
            <Link to="/verification-request">
              <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400">
                인증 요청하기
              </button>
            </Link>
          </div>
        )}

        {/* 기타 정보 섹션 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">나의 정보</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>등록한 서비스 확인</li>
            <li>신청한 서비스 내역</li>
            <li>메시지 확인</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
