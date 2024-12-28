import React, { useState, useEffect } from "react";

function Service() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    region: "",
    category: "",
    price: "",
    availability: "",
    contact: "",
  });
  const [isVerified, setIsVerified] = useState(false); // 검증 여부
  const [message, setMessage] = useState("");

  // 검증 상태 확인 (Mock API)
  useEffect(() => {
    // Replace with actual API call to check verification status
    const verificationStatus = true; // 예: 인증된 사용자
    setIsVerified(verificationStatus);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (!isVerified) {
      setMessage("서비스를 등록하려면 먼저 인증을 완료해야 합니다.");
      return;
    }

    // Submit logic
    alert(
      `서비스 등록됨:\n\n제목: ${formData.title}\n지역: ${formData.region}\n카테고리: ${formData.category}\n가격: ${formData.price}\n연락처: ${formData.contact}`
    );
    setMessage("서비스가 성공적으로 등록되었습니다.");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto py-16 px-8 bg-white rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">서비스 등록</h2>

      {!isVerified && (
        <div className="mb-6 text-red-500 font-semibold">
          서비스 등록을 위해 먼저 <a href="/verification-request" className="text-blue-500 underline">인증</a>을 완료해주세요.
        </div>
      )}

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">서비스 제목</label>
        <input
          type="text"
          name="title"
          placeholder="서비스 제목"
          className="w-full px-4 py-2 border rounded-md"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">서비스 내용</label>
        <textarea
          name="description"
          placeholder="서비스 내용을 작성해주세요"
          className="w-full px-4 py-2 border rounded-md"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">제공 가능한 지역</label>
        <input
          type="text"
          name="region"
          placeholder="제공 가능한 지역"
          className="w-full px-4 py-2 border rounded-md"
          value={formData.region}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">카테고리</label>
        <select
          name="category"
          className="w-full px-4 py-2 border rounded-md"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">카테고리를 선택하세요</option>
          <option value="멘토링">멘토링</option>
          <option value="집수리">집수리</option>
          <option value="아이 돌봄">아이 돌봄</option>
          <option value="요리">요리</option>
          <option value="기타">기타</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">서비스 가격 (₩)</label>
        <input
          type="number"
          name="price"
          placeholder="서비스 가격을 입력하세요"
          className="w-full px-4 py-2 border rounded-md"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">제공 가능 시간</label>
        <input
          type="text"
          name="availability"
          placeholder="예: 월-금 오전 10시 ~ 오후 6시"
          className="w-full px-4 py-2 border rounded-md"
          value={formData.availability}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">연락처</label>
        <input
          type="text"
          name="contact"
          placeholder="연락 가능한 전화번호 또는 이메일"
          className="w-full px-4 py-2 border rounded-md"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className={`px-8 py-3 font-bold rounded-md shadow-lg ${
            isVerified
              ? "bg-blue-600 text-white hover:bg-blue-500"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          disabled={!isVerified}
        >
          서비스 등록
        </button>
      </div>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </form>
  );
}

export default Service;
