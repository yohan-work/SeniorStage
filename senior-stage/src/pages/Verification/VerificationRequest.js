import React, { useState } from "react";

function VerificationRequest() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    certificate: null,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, certificate: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock submission logic
    setMessage("검증 요청이 접수되었습니다. 관리자 확인 후 승인됩니다.");
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">시니어 검증 요청</h2>

      {/* 검증 과정 인포그래픽 */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-center">시니어 검증 과정</h3>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-500 text-white rounded-full text-xl font-bold">
              1
            </div>
            <p className="mt-2 text-gray-700">검증 요청</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-yellow-500 text-white rounded-full text-xl font-bold">
              2
            </div>
            <p className="mt-2 text-gray-700">관리자 검토</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-500 text-white rounded-full text-xl font-bold">
              3
            </div>
            <p className="mt-2 text-gray-700">승인 완료</p>
          </div>
        </div>
      </section>

      {/* 검증 요청 폼 */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-16">
        <div>
          <label className="block text-gray-700">이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">전문 분야</label>
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">증빙 자료 업로드</label>
          <input
            type="file"
            name="certificate"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
        >
          검증 요청 제출
        </button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}

      {/* 데이터 기반 신뢰도 강조 섹션 */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-center">검증 성공 사례</h3>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-bold mb-2">[가상 사례] 김철수 시니어</h4>
          <p className="text-gray-700">
            <strong>전문 분야:</strong> IT 컨설팅
          </p>
          <p className="text-gray-700">
            <strong>검증 내용:</strong> 15년 이상의 IT 프로젝트 경험 증명
          </p>
          <p className="text-gray-700 mb-4">
            <strong>성과:</strong> 검증 완료 후 총 20개의 프로젝트를 매칭 성공, 사용자 리뷰 점수
            평균 4.8점
          </p>
          <div className="flex gap-4">
            <div className="w-1/3 bg-blue-500 text-white text-center py-4 rounded-lg">
              <p className="text-2xl font-bold">95%</p>
              <p>매칭 만족도</p>
            </div>
            <div className="w-1/3 bg-yellow-500 text-white text-center py-4 rounded-lg">
              <p className="text-2xl font-bold">20+</p>
              <p>매칭된 서비스</p>
            </div>
            <div className="w-1/3 bg-green-500 text-white text-center py-4 rounded-lg">
              <p className="text-2xl font-bold">4.8/5</p>
              <p>리뷰 점수</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VerificationRequest;
